import React,{useState, useEffect} from "react";
import "./itemdetailcontainer.css";
import {ItemDetail} from "./ItemDetail/ItemDetail"
import {pedirDatos} from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom"
import { getFirestore } from "../../firebase/config";


export const ItemDetailContainer = () => {

   
    const { itemId } = useParams()

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const db = getFirestore()
        const productos = db.collection ("productos")
        const item = productos.doc (itemId)

        item.get().then((res) => {
            console.log(res.data())
            setItem( {...res.data(), id:res.id} )
        })

        // setLoading(true)

        // pedirDatos()
        //     .then( res => {
        //         setItem( res.find( prod => prod.id === itemId) )
        //     })
        //     .finally(()=> { setLoading(false)})

     }, [itemId])

   

    return (
        <div>
            {loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )

}