import {stock} from "../Data/stock"

export const PedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(stock)
        },2000)
    })
   
}