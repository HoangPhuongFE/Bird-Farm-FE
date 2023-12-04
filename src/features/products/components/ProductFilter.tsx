import RadioController from 'components/input/RadioController'
import { useForm } from 'react-hook-form'

const ProductFilter = () => {
  const { control } = useForm()
  const product = [
    { value: 'option1', label: 'Hàng mới về' },
    { value: 'option2', label: 'Xem nhiều nhất' },
    { value: 'option3', label: 'Bán Chạy' },
    { value: 'option4', label: 'Giá giảm dần' },
    { value: 'option5', label: 'Giá tăng dần' },
    { value: 'option6', label: 'Được giảm giá' }
  ]
  const size = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' }
  ]
  return (
    <div>
      <div className="">
        <div className="pt-2">
          <p className="pl-[20px] text-lg font-medium">Danh mục</p>
          <div className="pt-4">
            <RadioController
              name="options"
              control={control} // Đảm bảo bạn đã khai báo 'control' từ React Hook Form ở đây
              options={product}
              onChange={(value) => console.log(value)}
              defaultValue={''}
            />
          </div>
        </div>
        <div className="pt-10">
          <p className="pl-[20px] text-lg font-medium">Kích thước</p>
          <div className="pt-2">
            <RadioController
              name="size"
              control={control} // Đảm bảo bạn đã khai báo 'control' từ React Hook Form ở đây
              options={size}
              onChange={(value) => console.log(value)}
              defaultValue={''}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter
