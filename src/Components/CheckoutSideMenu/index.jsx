import './styles.css'

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { XMarkIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../Context'

import OrderCard from '../OrderCard'

import { totalPrice } from '../../utils'

function CheckoutSideMenu() {
    const {
        isCheckoutSideMenuOpen, closeCheckoutSideMenu,
        cartProducts, setCartProducts,
        setOrder,
    } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        closeCheckoutSideMenu()

        const orderToAdd = {
            date: new Date(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
        }

        setOrder(state => [...state, orderToAdd])
        setCartProducts([])
    }

    return (
        <aside
            className={`${isCheckoutSideMenuOpen? 'flex' : 'hidden'}
            checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div className='cursor-pointer' onClick={() => closeCheckoutSideMenu()}>
                    <XMarkIcon className='w-4 h-4' />
                </div>
            </div>
            <div className='px-6 overflow-y-auto flex-1'>
                {
                    cartProducts.map(product => (
                        <OrderCard key={product.id}
                            id={product.id}
                            title={product.title} imageUrl={product.images[0]} price={product.price}
                            handleDelete={handleDelete} />
                    ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-normal'>Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button onClick={() => handleCheckout()}
                        className='w-full bg-black py-2 text-white rounded-lg mt-2 mb-4'>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu