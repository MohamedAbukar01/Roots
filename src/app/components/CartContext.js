'use client'

import { useState, useContext, createContext } from "react"

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItem] = useState([])
    

    const addToCart = (product) => {
        setCartItem([...cartItems, product])
    }

    const removeCartItems = (product) => {
        setCartItem(cartItems.filter( (item) => item.id !== product.id))
    }


return (
    <CartContext.Provider value={{cartItems, addToCart, removeCartItems }}>
        {children}
    </CartContext.Provider>
)

}

export const useCart = () => {
    return useContext(CartContext)
}
