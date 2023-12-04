import ProductFilter from './ProductFilter'
import ProductState from './ProductState'

const ProductScreen = () => {
  return (
    <div>
      <div className="bg-[#D9D9D9]">
        <p className="py-[70px] text-center text-3xl font-medium">
          Tất cả sản phẩm
        </p>
      </div>
      <div className="ml-[220px] mr-[200px] mt-10 grid grid-cols-12">
        <div className="col-span-3">
          <ProductFilter />
        </div>
        <div className="col-span-9">
          <ProductState />
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
