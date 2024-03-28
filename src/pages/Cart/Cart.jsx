import { Link } from 'react-router-dom'
import { useState } from 'react'

import Loading from '../../components/Loading'
import CartItems from '../../components/CartItems/CartItems'

export default function Cart() {
  const [loading] = useState(false)
  const [cartItems] = useState([
    {
      id: 1,
      name: 'Iphone 14 Pro Max 256Gb Gold',
      price: 100000,
      discountPercent: 2,
      quantity: 1,
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
        <div className="">
          <div className="h-96 flex flex-col items-center justify-center">
            <div className="text-2xl">Giỏ hàng chưa có sản phẩm nào</div>
            <Link
              className="mt-3 border-2 py-1 px-2 rounded-lg border-emerald-500 bg-emerald-100 hover:bg-emerald-200"
              to="/products"
            >
              Mua sắm ngay
            </Link>
          </div>
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
