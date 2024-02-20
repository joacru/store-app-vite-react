import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard({ id, title, imageUrl, price, handleDelete }) {
    return (
        <div className='flex justify-between items-center mb-2'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20 shrink-0'>
                    <img src={ imageUrl } alt='' className='w-full h-full rounded-lg object-cover' />
                </figure>
                <p className='text-sm font-normal'>{ title }</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${ price }</p>
                <div className='cursor-pointer' onClick={() => handleDelete(id)}>
                    <XMarkIcon className='w-4 h-4' />
                </div>
            </div>
        </div>
    )
}

export default OrderCard