import React, { useState, useEffect} from "react";
import "./itemlistcontainer.css";
import {ItemList} from "./ItemList/ItemList"
import {pedirDatos} from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import { getFirestore } from "../../firebase/config";


export const ItemListContainer = (props) => {
    const { catId } = useParams()

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false)
    
    useEffect( ()=> {

        const db = getFirestore()
        const productos = db.collection("productos")

        productos.get().then((res) => {
            const data = res.docs.map ((doc) => ({...doc.data(), id:doc.id}))
            console.log(data)

            setData(data)
        })


        // setLoading(true)

        // pedirDatos()
        //     .then(res => {

        //         if (catId) {
        //             const catFilter = res.filter( prod => prod.idCat === catId)
        //             setData( catFilter )
        //         } else {
        //             setData(res)
        //         }
        //     })
        //     .catch(err => console.log(err))
        //     .finally(()=> {
        //         setLoading(false)
        //     })

    }, [catId])


    return(
        
        <div className = "producrender">
            
            {loading ? <h1>Cargando...</h1> 
            : <ItemList productos = {data}/>}

            <Link to={"/"} className = {"iniciobut"}>Inicio</Link>
                
        </div>
    )
}