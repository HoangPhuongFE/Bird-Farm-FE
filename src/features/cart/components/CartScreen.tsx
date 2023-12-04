import BaseButton from 'components/button/BaseButton'
import TextInput from 'components/input/TextInput'
import { IBird } from 'features/products/types'
import { useAtom, useSetAtom } from 'jotai'
import { BsArrowLeft } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import {
  cartAtom,
  decreaseQuantityAtom,
  increaseQuantityAtom,
  removeCartAtom
} from '../state'
const CartScreen = () => {
  const [carts] = useAtom(cartAtom)
  const removeCart = useSetAtom(removeCartAtom)
  const increaseQuantity = useSetAtom(increaseQuantityAtom)
  const decreaseQuantity = useSetAtom(decreaseQuantityAtom)
  const handleRemoveCart = (id: number) => {
    removeCart(id)
  }
  const total = carts.reduce((total: number, cart: IBird) => {
    return total + cart.price * cart.quantity
  }, 0)
  return (
    <div>
      <div className="pt-10 text-center text-4xl text-primary">Cart</div>
      <div className="mx-[100px] mb-20 mt-10 grid grid-cols-2 gap-12">
        <div className="">
          <table className="table-auto border-b-2 ">
            <thead className="border-b-4">
              <tr className="">
                <th
                  align="left"
                  className="w-[50px] text-xl font-normal text-gray-700"
                ></th>
                <th
                  align="left"
                  className="w-[400px] text-xl font-normal text-gray-700"
                >
                  Product
                </th>
                <th
                  align="left"
                  className="w-[120px] text-xl font-normal text-gray-700"
                >
                  Price
                </th>
                <th
                  align="left"
                  className="w-[120px] text-xl font-normal text-gray-700"
                >
                  Quantity
                </th>
                <th
                  align="right"
                  className="w-[120px] text-xl font-normal text-gray-700"
                >
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className="">
              {carts &&
                carts.map((cart) => {
                  return (
                    <tr className="">
                      <td>
                        <div>
                          <TiDeleteOutline
                            onClick={() => handleRemoveCart(cart.id)}
                            size={32}
                            className="cursor-pointer hover:bg-slate-200"
                          />
                        </div>
                      </td>
                      <td className="py-6">
                        <div className="flex items-center">
                          <div>
                            <img
                              src={`/uploads/bird/${cart.imageUrl}`}
                              alt=""
                              className="h-[80px] w-[80px]"
                            />
                          </div>
                          <div className="space-y-2 pl-4">
                            <p className="text-gray-500">{cart.name}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>{cart.price}$</p>
                      </td>
                      <td>
                        <div className="flex">
                          <button
                            onClick={() => decreaseQuantity(cart.id)}
                            className="border-[1px] px-2 py-2"
                          >
                            -
                          </button>
                          <p className="border-[1px] px-3 py-2">
                            {cart.quantity}
                          </p>
                          <button
                            onClick={() => increaseQuantity(cart.id)}
                            className="border-[1px] px-2 py-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td align="right">{cart.price * cart.quantity} $</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>

          {carts && carts.length > 0 && (
            <div className="flex items-center justify-between pt-6">
              <p className="ml-10 text-xl font-bold">Total</p>
              <p className="text-xl font-semibold text-primary">{total} $</p>
            </div>
          )}
          <div className="ml-10 flex items-center space-x-5 pt-7 text-lg text-red-600 hover:text-red-300">
            <BsArrowLeft />
            <Link to="/product"> Tiếp tục mua sắm</Link>
          </div>
        </div>
        <div className="border-l-2 ">
          <p className=" text-center text-xl font-semibold text-primary">
            Address
          </p>
          <div>
            <TextInput
              placeholder="Nhập địa chỉ giao hàng"
              className="ml-10 mt-8 w-[500px]"
            />
            <TextInput
              placeholder="Số điện thoại nhận hàng"
              className="ml-10 mt-8 w-[500px]"
            />
            <TextInput
              placeholder="Ghi chú với người bán"
              className="ml-10 mt-8 w-[500px]"
            />
            <div className="pt-10 text-center">
              <BaseButton
                title="Đặt hàng"
                className="rounded-xl bg-red-400 px-8 py-2 hover:bg-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
