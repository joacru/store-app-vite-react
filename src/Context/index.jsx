import { useState, createContext, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }){
    // Items
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    const [filteredItems, setFilteredItems] = useState([])

    // Items - Search
    const [searchValue, setSearchValue] = useState('')
    const filterItems = (items, value) => {
        return items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
    }
    useEffect(() => {
        if(searchValue) setFilteredItems(filterItems(items, searchValue))
        else setFilteredItems(items)
    }, [items, searchValue])

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

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={
            {
                items, setItems,
                filteredItems,
                searchValue, setSearchValue,
                counter, setCounter,
                isProductDetailOpen, openProductDetail, closeProductDetail,
                productToShow,
                isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
                cartProducts, setCartProducts,
                order, setOrder,
            }
        }>
            { children }
        </ShoppingCartContext.Provider>
    )
}