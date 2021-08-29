import React,{useState, useEffect} from "react";
// import "./itemDetailContainer.css";
import {ItemDetail} from "./ItemDetail"
import {pedirDatos} from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {

   
    const { itemId } = useParams()

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then( res => {
                setItem( res.find( prod => prod.id === itemId) )
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