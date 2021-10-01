import { getFirestore } from "./config"
import firebase from "firebase/app"
import "firebase/firestore"



export const generateOrder = (cart, userInfo, totalCart) =>{

    return new Promise ((resolve, reject) => {
        const db = getFirestore()
        const orders = db.collection("orders")

        const newOrder ={
            buyer: userInfo,
            items: cart,
            total: totalCart,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(newOrder)
            .then((res) => {
                resolve(res.id)
            })
            .catch((err) =>{
                reject(err)
            })
    })

    
}