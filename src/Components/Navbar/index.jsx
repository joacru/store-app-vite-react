import { useContext } from 'react'

import { NavLink } from 'react-router-dom'

import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../Context'

function Navbar() {
    const activeStyle = 'underline font-semibold underline-offset-4'
    
    const {
        counter,
        categories
    } = useContext(ShoppingCartContext)

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-sm bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-bold text-lg'>
                    <NavLink to='/'>
                        CShop
                    </NavLink>
                </li>
                <li className='text-center'>
                    <NavLink to='/'
                        className={({isActive}) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                { categories.map(category => (
                    <li key={category.id}
                        className='text-center'>
                        <NavLink to={`/${category.name.toLowerCase()}`}
                            className={({isActive}) => isActive ? activeStyle : undefined}>
                            {category.name}
                        </NavLink>
                    </li>
                )) }
            </ul>
            
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    joacru@joacru.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                        className={({isActive}) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                        className={({isActive}) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                        className={({isActive}) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingCartIcon className='h-4 w-4 text-black' />
                    <div className='ms-1'>{ counter }</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar