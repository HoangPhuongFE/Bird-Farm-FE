import { useQuery } from '@tanstack/react-query'
import BaseButton from 'components/button/BaseButton'
import { FaShoppingCart } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/products'
import { getSpeciesById } from '../services/species'
import { IBird } from '../types'

const ProductDetailScreen = () => {
  const { id } = useParams()
  const { data } = useQuery<IBird>({
    queryKey: ['bird', id],
    queryFn: () => getProductById(id)
  })
  console.log(data)

  const { data: species } = useQuery({
    queryKey: ['species', data?.speciesId],
    queryFn: () => getSpeciesById(data?.speciesId),
    enabled: !!data
  })
  console.log(species)

  return (
    <>
      {data && species && (
        <div>
          <div className="bg-[#D9D9D9]">
            <p className="py-[70px] text-center text-3xl font-medium">
              PRODUCT DETAIL
            </p>
          </div>
          <div className="mx-[220px] flex items-center justify-between pt-10">
            <p className="text-xl font-medium">{data.name}</p>
            <div className="flex space-x-4">
              <BaseButton title="so sánh" className="rounded-md px-4 py-1" />
              <BaseButton title="ghép giống" className="rounded-md px-4 py-1" />
            </div>
          </div>
          <div className="mx-[220px] grid grid-cols-2 gap-4 pt-10">
            <div>
              <img
                src={`/uploads/bird/${data?.imageUrl}`}
                alt=""
                className="w-full object-contain"
              />
            </div>
            <div className="ml-[50px] space-y-5">
              <p>
                <span className="text-lg font-medium ">Giá tiền: </span>{' '}
                {data.price} $
              </p>
              <p>
                <span className="text-lg font-medium ">Loài chim: </span>{' '}
                {species.name}
              </p>
              <p>
                <span className="text-lg font-medium ">Tuổi chim: </span>{' '}
                {data?.age}
              </p>
              <p>
                <span className="text-lg font-medium ">Thành tích: </span>{' '}
                {data.trophy}
              </p>

              <p>
                <span className="text-lg font-medium ">Mô tả : </span>{' '}
                {data.description}
              </p>
              <div className=" flex max-w-[150px] cursor-pointer justify-center space-x-2 rounded-lg bg-gray-300 py-1 hover:bg-gray-500 hover:text-white">
                <FaShoppingCart className="cursor-pointer " size="24" />
                <p className="">Add to cart</p>
              </div>
            </div>
          </div>
          <div className="mx-[120px] pt-[60px]">
            <p className="py-8 text-center text-2xl font-medium">
              Related Products
            </p>
            <div className="grid grid-cols-4 gap-4"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetailScreen
