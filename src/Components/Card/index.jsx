import { useContext } from 'react'

import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../Context'

function Card({ item }) {
    const {
        openProductDetail,
        cartProducts, setCartProducts,
        openCheckoutSideMenu,
    } = useContext(ShoppingCartContext)

    const isInCart = cartProducts.filter(product => product.id === item.id).length > 0

    const addProductToCart = (event, product) => {
        event.stopPropagation()
        setCartProducts([...cartProducts, product])
        openCheckoutSideMenu()
    }

    const renderIcon = () => {
        if(isInCart){
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='w-4 h-4 text-white'/>
                </div>
            )
        }
        return (
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => addProductToCart(event, item)}>
                <PlusIcon className='w-4 h-4 text-black-500'/>
            </div>
        )
    }

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => openProductDetail(item)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg
                    text-black text-xs font-semibold m-2 px-2 py-0.5'>
                    { item.category.name }</span>
                <img src={ item.images[1] }
                    className='w-full h-full object-cover'
                    alt='headphones' />
                { renderIcon(item.id) }
            </figure>
            <p className='flex justify-between px-2'>
                <span className='text-sm'>{ item.title }</span>
                <span className='text-lg font-bold'>${ item.price }</span>
            </p>
        </div>
    )
}

export default Card