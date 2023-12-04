import BaseButton from 'components/button/BaseButton'
import { addToCartAtom } from 'features/cart/state'
import { useSetAtom } from 'jotai'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IBird } from '../types'

interface ProductCardProps {
  bird: IBird
}

const ProductCard: React.FC<ProductCardProps> = ({ bird }) => {
  const navigate = useNavigate()

  const addToCart = useSetAtom(addToCartAtom)

  const handelAddToCart = (bird: IBird) => {
    addToCart(bird)
  }
  return (
    <div className="p-4">
      <div className="flex flex-col">
        <img
          src={`/uploads/bird/${bird.imageUrl}`}
          alt=""
          className="h-[10vw] w-full object-center"
        />
        <p className="text-center text-primary">{bird.name}</p>
        <p className="pt-1 text-center text-primary">Giá : {bird.price}$</p>
        <div className="flex justify-center space-x-4 pt-4">
          <BaseButton
            handleClick={() => handelAddToCart(bird)}
            title="Mua"
            className="px-4 py-1"
          />
          <BaseButton
            handleClick={() => navigate(`/product-detail/${bird.id}`)}
            title="Chi tiết"
            className="px-4 py-1"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
