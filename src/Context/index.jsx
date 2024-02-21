import { useState, createContext, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }){
    // Categories
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

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
    const [searchCategory, setSearchCategory] = useState(null)
    const filterItems = (items, value) => {
        return items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
    }
    const filterItemsByCategory = (items, value) => {
        return items.filter(item => item.category.name.toLowerCase() === value)
    }
    useEffect(() => {        
        let itemsToShow = [...items]
        if(searchCategory) itemsToShow = filterItemsByCategory(itemsToShow, searchCategory)
        if(searchValue) itemsToShow = filterItems(itemsToShow, searchValue)
        setFilteredItems(itemsToShow)
    }, [items, searchValue, searchCategory])

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
                categories,
                filteredItems,
                searchValue, setSearchValue,
                isProductDetailOpen, openProductDetail, closeProductDetail,
                productToShow,
                isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
                cartProducts, setCartProducts,
                order, setOrder,
                setSearchCategory,
            }
        }>
            { children }
        </ShoppingCartContext.Provider>
    )
}