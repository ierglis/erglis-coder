import React,{useState, useEffect} from "react";
import "./itemlistcontainer.css";
import {ItemList} from "./ItemList/ItemList"
import {pedirDatos} from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
    const { catId } = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect( ()=> {
        setLoading(true)

        pedirDatos()
            .then(res => {

                if (catId) {
                    const arrayFiltrado = res.filter( prod => prod.idCat === catId)
                    setData( arrayFiltrado )
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })

    }, [catId])


    return(
        
        <div>
            {loading ? <h1>Cargando...</h1> 
            : <ItemList productos = {data}/>}

        </div>
    )
}