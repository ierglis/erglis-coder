import { createContext, useState } from "react";


export const CartContext = createContext()

  
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
  
    const isInCart = (data) => {
        if (cart?.find(prod => prod.id === data.id)) {
            return true
        }
    }
  
    const agregar = (data, cantidad) => {
        if (isInCart(data)){
            cart.map(prod => {
                
                if (prod.id === data.id) {
                    return cart.cantidad += cantidad
                }
                
            })
        } else {
            setCart(state => {
                return  [...state, {...data, stock: cantidad}]
            })
        }
    }
  
    const eliminar = (id) => {
      setCart (cart.filter(prod => prod.id !== id))
    }
  
     const cantidadCart = () => {
     return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
  
    const vaciar = () => {
      setCart ([])
    }


    return(
        <CartContext.Provider value = {{cart, agregar, eliminar, cantidadCart, vaciar}}>
            {children}
        </CartContext.Provider>    
    )
}