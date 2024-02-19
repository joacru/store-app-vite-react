import { useState, createContext } from 'react'

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }){
    const [counter, setCounter] = useState(0)

    return (
        <ShoppingCartContext.Provider value={
            {
                counter, setCounter,
            }
        }>
            { children }
        </ShoppingCartContext.Provider>
    )
}