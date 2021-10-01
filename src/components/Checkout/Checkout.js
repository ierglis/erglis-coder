import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { generateOrder } from "../../firebase/generateOrder"
import { Redirect } from "react-router-dom"

export const Checkout = () => {

    const {cart, vaciar, totalCart} = useContext(CartContext)

    const [userInfo, setUserInfo] = useState({
        name: "",
        tel: 0,
        email: ""
    })

    const handleInputChange = (e) =>{
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(userInfo.name.length > 3 && userInfo.tel.length > 8 && userInfo.email.length > 6){
            generateOrder(userInfo, cart, totalCart())
            .then(res => {
                alert(res)
                vaciar()
            })
            .catch(err => alert(err))
        }
        else{
            alert("Campos inválidos")
        }
    }

    return(
        <div>
            

                <h1>Checkout</h1>
                
                {cart.length === 0 
                ?
                <Redirect to ="/"/>
                :
                <div>
                    <form onSubmit = {handleSubmit}>
                        <label for = "name">Nombre</label>
                        <input type= "text" value = {userInfo.name} onChange = {handleInputChange} name = "name" placeholder = "Ingrese su nombre" required />

                        <label for = "tel">Teléfono</label>
                        <input type= "tel" value = {userInfo.tel} onChange = {handleInputChange} name = "tel" placeholder = "Ej: 1135662244" required />

                        <label for = "email">Email</label>
                        <input type= "email" value = {userInfo.email} onChange = {handleInputChange} name = "email" placeholder = "Ej: a@b.com" required />
                    </form>
                
                    <button type = "submit" onClick = {() => generateOrder(userInfo, cart, totalCart())}>FINALIZAR COMPRA</button>
                </div>
                }   
        </div>
    )
}