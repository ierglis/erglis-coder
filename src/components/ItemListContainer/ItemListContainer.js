import React, { useState, useEffect} from "react";
import "./itemlistcontainer.css";
import {ItemList} from "./ItemList/ItemList"
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import { getFirestore } from "../../firebase/config";


export const ItemListContainer = (props) => {
    const { catId } = useParams()

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false)
    useEffect(() => {

        setLoading(true)
        
        const db = getFirestore()
        let productos = db.collection("productos")

        if (catId) {
           productos = productos.where("idCat", "==", catId)
        }

        productos.get()
            .then((res) => {
            const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            setData(data)
           })
           .catch((err) => console.log(err))

           .finally(() => {
              setLoading(false)
           })
           
    }, [catId, setLoading])


    return(
        
        <div className = "producrender">
            
            {loading ? <h1>Cargando...</h1> 
            : <ItemList productos = {data}/>}

            <Link to={"/"} className = {"iniciobut"}>Inicio</Link>
                
        </div>
    )
}