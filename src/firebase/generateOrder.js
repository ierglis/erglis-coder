import { getFirestore } from "./config"
import firebase from "firebase/app"
import "firebase/firestore"

export const generateOrder = (cart, userInfo, totalCart) =>{

    const db = getFirestore()
    const orders = db.collection("orders")

    const newOrder ={
        buyer: userInfo,
        items: cart,
        total: totalCart,
        date: firebase.firestore.Timestamp.fromDate(new Date())
    }

    orders.add(newOrder)
        .then((res) => console.log(res.id))
    
}