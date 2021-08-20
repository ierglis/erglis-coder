import React,{useState, useEffect} from "react";
import "./itemlistcontainer.css";
import {ItemList} from "./ItemList/ItemList"
import {PedirDatos} from "../../helpers/PedirDatos";


export const ItemListContainer = (props) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(  () => {
        setLoading(true)

        PedirDatos()
        .then((prod)=>{setData(prod)})
        .catch((err) =>{console.log(err)})
        .finally(()=>{
            setLoading(false)
        })
    }, [])


    return(
        
        <div>
            {loading ? <h1>Cargando...</h1> 
            : <ItemList productos = {data}/>}

        </div>
    )
}