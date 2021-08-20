import React from "react"
import {Item} from "../Item/Item"
import "./itemlist.css"

export const ItemList = ( {productos} ) =>{

   
    return(
        <div>
            <h1 className = "title">Todos nuestros productos</h1>
            <div className = "divproduct">
                {productos.map((prodropa) => <Item key={prodropa.id} {...prodropa}/> )}
            </div>
            
        </div>
    )

}