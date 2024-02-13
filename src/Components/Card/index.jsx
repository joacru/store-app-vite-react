function Card() {
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg
                    text-black text-xs font-semibold m-2 px-2 py-0.5'>
                    Electronics</span>
                <img src='https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    className='w-full h-full object-cover'
                    alt='headphones' />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                    +</div>
            </figure>
            <p className='flex justify-between px-2'>
                <span className='text-sm'>Headphones</span>
                <span className='text-lg font-bold'>$300</span>
            </p>
        </div>
    )
}

export default Card