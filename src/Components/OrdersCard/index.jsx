import { ChevronRightIcon } from '@heroicons/react/24/solid'

function OrdersCard({ order }) {
    return (
        <div className='flex justify-between items-center mb-2 p-2 border border-black rounded-lg w-80'>
            <p className='flex flex-col'>
                <span className='text-normal font-normal'>{ order.date.toLocaleDateString('es-AR') }</span>
                <span className='text-sm font-medium'>{ order.totalProducts } articles</span>
            </p>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${ order.totalPrice }</p>
                <div className='cursor-pointer'>
                    <ChevronRightIcon className='w-4 h-4' />
                </div>
            </div>
        </div>
    )
}

export default OrdersCard