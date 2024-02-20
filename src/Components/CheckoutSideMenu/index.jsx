import './styles.css'

import { useContext } from 'react'

import { XMarkIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../Context'

import OrderCard from '../OrderCard'

import { totalPrice } from '../../utils'

function CheckoutSideMenu() {
    const {
        isCheckoutSideMenuOpen, closeCheckoutSideMenu,
        cartProducts, setCartProducts,
    } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
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
            <div className='px-6 overflow-y-auto'>
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
            </div>
        </aside>
    )
}

export default CheckoutSideMenu