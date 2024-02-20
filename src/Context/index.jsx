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

    // Checkout Side Menu - Open & Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => {
        closeProductDetail()
        setIsCheckoutSideMenuOpen(true)
    }
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Shopping Cart - Products
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContext.Provider value={
            {
                counter, setCounter,
                isProductDetailOpen, openProductDetail, closeProductDetail,
                productToShow,
                isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
                cartProducts, setCartProducts,
            }
        }>
            { children }
        </ShoppingCartContext.Provider>
    )
}