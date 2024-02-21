import { useContext } from "react"
import { Link } from "react-router-dom"

import { ShoppingCartContext } from "../../Context"

import OrdersCard from "../../Components/OrdersCard"

function MyOrders() {
    const {
        order,
    } = useContext(ShoppingCartContext)

    return (
        <>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h2 className='font-medium text-xl'>My Orders</h2>
            </div>
            {order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard order={order} />
                </Link>
            ))}
        </>
    )
}
  
export default MyOrders