import React,{useState, useEffect} from "react";
import "./itemdetailcontainer.css";
import {ItemDetail} from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore } from "../../firebase/config";


export const ItemDetailContainer = () => {

   
    const { itemId } = useParams()

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        const db = getFirestore()
        const productos = db.collection ("productos")
        const item = productos.doc (itemId)

        item.get().then((res) => {
            setItem( {...res.data(), id:res.id} )
        })

        .finally(()=> { setLoading(false)})

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