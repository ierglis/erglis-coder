import {stock} from "../Data/stock"

export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(stock)
        },2000)
    })
   
}