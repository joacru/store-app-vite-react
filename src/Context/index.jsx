import { useState, createContext } from 'react'

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }){
    // Shopping Cart - Counter
    const [counter, setCounter] = useState(0)

    // Product Detail - Open & Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = (product) => {
        setProductToShow(product)
        setIsProductDetailOpen(true)
    }
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail - Get info
    const [productToShow, setProductToShow] = useState({
        title: '',
        price: '',
        description: '',
        images: [],
    })

    return (
        <ShoppingCartContext.Provider value={
            {
                counter, setCounter,
                isProductDetailOpen, openProductDetail, closeProductDetail,
                productToShow,
            }
        }>
            { children }
        </ShoppingCartContext.Provider>
    )
}