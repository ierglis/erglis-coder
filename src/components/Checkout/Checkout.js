import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getFirestore } from "../../firebase/config"
import firebase from "firebase/app"
import "firebase/firestore"

export const Checkout = () => {

    const db = getFirestore()
    const orders = db.collection("orders")

    const {cart, totalCart} = useContext(CartContext)

    const userInfo = {
        name: "juan",
        tel: 15,
        email: "asd@asd.com"
    }

    const newOrder ={
        buyer: userInfo,
        items: cart,
        total: totalCart(),
        date: firebase.firestore.Timestamp.fromDate(new Date())
    }

    console.log(newOrder)
    return(
        <div>

            <h1>Checkout</h1>

        </div>
    )
}