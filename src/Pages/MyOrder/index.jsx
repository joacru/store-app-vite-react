import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ChevronLeftIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../Context'

import OrderCard from '../../Components/OrderCard'

function MyOrder() {
    const {
        order,
    } = useContext(ShoppingCartContext)

    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if(index === 'last') index = order.length - 1

    return (
        <>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <Link to={'/my-orders'} className='absolute left-0'>
                    <ChevronLeftIcon className='w-4 h-4 text-black' />
                </Link>
                <h2 className='font-medium text-xl'>Home</h2>
            </div>
            <div className='flex flex-col w-80'>
                {
                    order[index]?.products.map(product => (
                        <OrderCard key={product.id}
                            id={product.id}
                            title={product.title} imageUrl={product.images[0]} price={product.price} />
                    ))
                }
            </div>
        </>
    )
}
  
export default MyOrder