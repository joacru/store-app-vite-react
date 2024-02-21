import { ChevronRightIcon } from '@heroicons/react/24/solid'

function OrdersCard({ order }) {
    return (
        <div className='flex justify-between items-center mb-2 p-2 border border-black rounded-lg w-80'>
            <p className='flex items-center gap-3'>
                <span>{ order.date.toLocaleDateString('es-AR') }</span>
                <span>{ order.totalProducts } items</span>
            </p>
            <div className='flex items-center'>
                <p className='text-lg font-medium'>${ order.totalPrice }</p>
                <div className='cursor-pointer'>
                    <ChevronRightIcon className='w-4 h-4' />
                </div>
            </div>
        </div>
    )
}

export default OrdersCard