import { useQuery } from '@tanstack/react-query'
import ProductCard from 'features/products/components/ProductCard'
import { getProducts } from 'features/products/services/products'
import { IBird } from 'features/products/types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules

const HomeScreen = () => {
  const skip = 0
  const take = 8
  const { data } = useQuery<IBird[]>({
    queryKey: ['birds', skip, take],
    queryFn: () => getProducts(skip, take)
  })
  return (
    <div>
      <div className="mx-[160px] mt-[60px]">
        <div className="pt-5">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img
                  src="https://thuthuatnhanh.com/wp-content/uploads/2021/11/Hinh-anh-chim-Chao-Mao-sieu-net.jpg"
                  alt=""
                  className="center h-[80vh] w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img
                  src="https://inhat.vn/wp-content/uploads/2022/06/chim-c%E1%BA%A3nh-quy-nh%C6%A1n-8-min.jpg"
                  alt=""
                  className="center h-[80vh] w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.pixabay.com/photo/2018/04/30/13/47/wallpaper-3362711_1280.jpg"
                alt=""
                className="center bject-contain h-[80vh] w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://anhdephd.vn/wp-content/uploads/2022/04/hinh-nen-may-tinh-thien-nhien-2-loai-chim.jpg"
                alt=""
                className="center bject-contain h-[80vh] w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8xOn_54BSuQt3baw9ICLBhupmKBn5l-yyA&usqp=CAU"
                alt=""
                className="center bject-contain h-[80vh] w-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="pt-16 text-center text-3xl font-semibold text-primary">
          SẢN PHẨM NỔI BẬT
        </p>
        <div className="mx-auto grid grid-cols-3 gap-4 pt-10">
          {data &&
            data.map((bird) => {
              return <ProductCard key={bird.id} bird={bird} />
            })}
        </div>
      </div>
      <div className="mx-[220px] mt-10 ">
        <p className="text-center text-2xl font-medium">Our Blog</p>
        <div className="mx-auto grid grid-cols-3 gap-4 pt-10">
          <div>
            <img src="src/assets/image/our-blog.png" alt="" />
          </div>
          <div>
            <img src="src/assets/image/our-blog.png" alt="" />
          </div>
          <div>
            <img src="src/assets/image/our-blog.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
