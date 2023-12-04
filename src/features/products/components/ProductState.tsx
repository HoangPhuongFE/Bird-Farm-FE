import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getProducts } from '../services/products'
import { IBird } from '../types'
import ProductCard from './ProductCard'
import ProductPagination from './ProductPagination'

const ProductState = () => {
  const [page, setPage] = useState<number>(1)
  let skip = (page - 1) * 9
  let take = 9

  const handleChangePage = (page: number) => {
    setPage(page)
  }
  const { data } = useQuery<IBird[]>({
    queryKey: ['birds', skip, take],
    queryFn: () => getProducts(skip, take)
  })
  console.log(data)
  return (
    <div>
      <div className="text-center text-lg font-medium">Tất cả sản phẩm</div>
      <div className="grid grid-cols-3 gap-2">
        {data &&
          data.map((bird) => {
            return (
              <div key={bird.id}>
                <ProductCard bird={bird} />
              </div>
            )
          })}
      </div>
      <div>
        {data && (
          <ProductPagination
            totalPage={4}
            currentPage={page}
            onChangePage={handleChangePage}
          />
        )}
      </div>
    </div>
  )
}

export default ProductState
