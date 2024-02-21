import { useContext } from 'react'

import { ShoppingCartContext } from '../../Context'

import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
    const {
        filteredItems,
        searchValue, setSearchValue
    } = useContext(ShoppingCartContext);

    return (
        <>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h2 className='font-medium text-xl'>Exclusive products</h2>
            </div>
            <input type='text' placeholder='Search a product'
                value={searchValue}
                className='rounded-lg border border-black w-80 p-2 mb-5 focus:outline-none'
                onChange={(event) => setSearchValue(event.target.value) } />
                {
                    filteredItems.length?
                    <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {
                        filteredItems?.map(item => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                    </div> :
                    <p className='w-full text-center'> There is no items that match your query. </p>
                }
            <ProductDetail />
        </>
    )
}
  
export default Home