import './styles.css'

import { useContext } from 'react'

import { ShoppingCartContext } from '../../Context'

import { XMarkIcon } from '@heroicons/react/24/solid'

function ProductDetail() {
    const {
        isProductDetailOpen,
        closeProductDetail,
        productToShow,
    } = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${isProductDetailOpen? 'flex' : 'hidden'}
            product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='cursor-pointer' onClick={() => closeProductDetail()}>
                    <XMarkIcon className='w-4 h-4' />
                </div>
            </div>
            <figure className='px-4'>
                <img src={productToShow.images[0]} alt={productToShow.title}
                    className='w-full h-full rounded-lg'/>
            </figure>
            <p className='flex flex-col p-4'>
                <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-normal text-sm'>{productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail