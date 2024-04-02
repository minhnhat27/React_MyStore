import { useEffect, useState } from 'react'

import Image from '../../../components/UI/Image'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/Button'
import formatter from '../../../services/formatter'
import Wrapper from '../../../components/Wrapper'

export default function CartItems({ selectedProducts, setSelectedProducts, cartItems }) {
  const [checkAll, setCheckAll] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (selectedProducts.length === cartItems.length) {
      setCheckAll(true)
    } else {
      setCheckAll(false)
    }
  }, [selectedProducts, cartItems])

  const handleChangeQuantity = (quantity) => {}

  const handleSelectItems = (item) => {
    setSelectedProducts((preItems) => {
      var index = preItems.findIndex((i) => i.id === item.id)
      if (index !== -1) {
        return selectedProducts.filter((i) => i.id !== item.id)
      } else {
        return [...preItems, item]
      }
    })
  }

  useEffect(() => {
    const t = selectedProducts.reduce((tol, curr) => {
      const discount = (curr.price * curr.discountPercent) / 100
      const subtotal = (curr.price - discount) * curr.quantity
      return tol + subtotal
    }, 0)
    setTotal(t)
  }, [selectedProducts])

  const handleSelectAll = () => {
    if (!checkAll) {
      setSelectedProducts([...cartItems])
      setCheckAll(!checkAll)
    } else {
      setSelectedProducts([])
      setCheckAll(!checkAll)
    }
  }

  return (
    <>
      <div className="flex justify-between p-3">
        <div className="uppercase text-red-500 font-bold">Cart</div>
        <Button className="text-sky-500 hover:text-red-500">Delete All</Button>
      </div>
      <div>
        <table className="w-full text-sm text-left bg-slate-50">
          <thead className="text-center">
            <tr className="font-bold border-b">
              <td className="p-1">
                <Input type="checkbox" checked={checkAll} onChange={handleSelectAll} />
              </td>
              <td colSpan={3} className="p-3 text-center">
                Product
              </td>
              <td className="p-3">Unit Price</td>
              <td className="p-3">Quantity</td>
              <td className="p-3">Total Price</td>
            </tr>
          </thead>
          <tbody className="text-center">
            {cartItems.map((item, i) => {
              const dis = (item.price * item.discountPercent) / 100
              const tol = (item.price - dis) * item.quantity
              return (
                <tr key={i} className="border-b">
                  <td className="p-1">
                    <Input
                      type="checkbox"
                      checked={selectedProducts.includes(item)}
                      onChange={() => handleSelectItems(item)}
                    />
                  </td>
                  <td className="p-3 w-32">
                    <Image
                      width={80}
                      height={80}
                      src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907_inline.jpg.large.jpg"
                      alt=""
                    />
                  </td>
                  <td className="w-40 text-start">{item.name}</td>
                  <td className="w-40 text-start">
                    <label htmlFor="type" className="block mb-2 text-sm text-slate-500">
                      Variations
                    </label>
                    <select
                      id="type"
                      className="bg-gray-50 border w-fit text-slate-500 text-sm rounded-sm p-1 outline-none"
                    >
                      <option defaultValue value="S">
                        S
                      </option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </td>
                  <td className="p-3">
                    <div className="line-through text-slate-500">
                      {formatter.format(item.price)}
                    </div>
                    <div>{formatter.format(item.price - dis)}</div>
                  </td>
                  <td className="p-3">
                    <div>
                      <Button
                        type="button"
                        className="border py-1 px-2 rounded-s-sm active:bg-slate-300"
                        onClick={() => handleChangeQuantity(-1)}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        className="w-12 text-center p-1 outline-none border-t border-b"
                        onChange={(e) => handleChangeQuantity(e.target.value)}
                        value={item.quantity}
                      />
                      <Button
                        type="button"
                        className="border py-1 px-2 rounded-e-sm active:bg-slate-300"
                        onClick={() => handleChangeQuantity(1)}
                      >
                        +
                      </Button>
                    </div>
                    <Button className="text-red-400 p-0 mt-3 hover:text-red-500">Delete</Button>
                  </td>
                  <td className="p-3 text-red-500 font-medium">{formatter.format(tol)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Wrapper className="sticky bottom-0 py-2 px-5 flex flex-col items-end bg-slate-100">
        <div className="flex items-center">
          <label htmlFor="voucher">Voucher:</label>
          <Input
            type="text"
            name="voucher"
            className="p-2 border mx-3 w-72 rounded-md focus:outline-blue-500"
            id="voucher"
          />
          <Button type="button" className="rounded-md p-2 bg-blue-500 text-white font-semibold">
            Apply
          </Button>
        </div>
        <div className="mt-1">
          <span>
            Total ({selectedProducts.length} items):{' '}
            <span className="text-red-800">{formatter.format(total)}</span>
          </span>
          <Button className="border ml-3 p-2 rounded-sm bg-emerald-500 text-white">
            Check out
          </Button>
        </div>
      </Wrapper>
    </>
  )
}
