import { Link } from 'react-router-dom'
import { useState } from 'react'

import Loading from '../../components/Loading'
import CartItems from './CartItems'

export default function Cart() {
  const [loading] = useState(false)
  const [cartItems] = useState([
    {
      id: 1,
      name: 'Iphone 14 Pro Max 256Gb Gold',
      price: 100000,
      discountPercent: 2,
      quantity: 2,
    },
    { id: 2, name: 'DT2', price: 200000, discountPercent: 2, quantity: 1 },
    { id: 3, name: 'DT3', price: 500000, discountPercent: 2, quantity: 1 },
    {
      id: 4,
      name: 'Iphone 14 Pro Max 256Gb Gold',
      price: 100000,
      discountPercent: 2,
      quantity: 1,
    },
    {
      id: 5,
      name: 'Iphone 14 Pro Max 256Gb Gold',
      price: 100000,
      discountPercent: 2,
      quantity: 1,
    },
  ])
  const [selectedProducts, setSelectedProducts] = useState([])

  if (loading) {
    return <Loading />
  } else if (cartItems.length === 0) {
    return (
      <>
        <div className="h-96 flex flex-col items-center justify-center">
          <div className="text-2xl">Shopping cart is empty</div>
          <Link
            className="mt-3 border p-2 rounded-lg text-slate-100 bg-sky-400 hover:bg-sky-500"
            to="/products"
          >
            Shopping now
          </Link>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="w-full">
          <CartItems
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            cartItems={cartItems}
          />
        </div>
      </>
    )
  }
}
