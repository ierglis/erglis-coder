import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { generateOrder } from "../../firebase/generateOrder"

export const Checkout = () => {

    const {cart, totalCart} = useContext(CartContext)

    const [userInfo, setUserInfo] = useState({
        name: "",
        tel: "",
        email: 0
    })

    const handleInputChange = (e) =>{
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        generateOrder(userInfo, cart, totalCart())
    }

    return(
        <div>

            <h1>Checkout</h1>
            
            <form onSubmit = {handleSubmit}>
                <input type= "text" value = {userInfo.name} onChange = {handleInputChange} name = "name"></input>

            </form>

            <button onClick = {() => generateOrder(userInfo, cart, totalCart())}>FINALIZAR COMPRA</button>
        </div>
    )
}