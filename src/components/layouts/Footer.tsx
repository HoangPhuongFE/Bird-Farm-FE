import TextInput from 'components/input/TextInput'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="mt-10 grid  grid-cols-3 bg-[#290B7C] py-6 pl-[150px]">
      <div>
        <img src="src/assets/image/logo.png" alt="" />
        <p className="pl-[50px] pt-[62px] text-white">
          trang chim .... tempor incididunt ut Labore et dolore magna as aliqua.
          Ut enim ad minim veniam, quis nostrud kích thích ullamco.
        </p>
      </div>
      <div className="pl-[140px] pt-16">
        <p className="text-xl text-white">Quick Links</p>
        <div className="flex space-x-6 pt-6 text-sm text-white">
          <div className="space-y-3 text-lg font-light">
            <p>Home</p>
            <p>About Us</p>
            <p>Testimonial</p>
          </div>
          <div className="space-y-3 text-lg font-light">
            <p>Latest News</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="pl-[100px] pt-16">
        <p className="text-xl text-white">Follow Us</p>
        <div className="flex items-center space-x-6 pt-4">
          <div className="space-y-3">
            <BsTwitter size="24" />
            <BsFacebook size="24" />
          </div>
          <div className="space-y-3 pt-1">
            <BsInstagram size="24" />
            <BsYoutube size="24" />
          </div>
        </div>
      </div>
      <div className="pl-[50px] pt-8 text-white">
        <p className="ml-[100px] w-[100px] border-b-[2px] border-black pb-2 text-center">
          HEAD OFFICE
        </p>
        <p className="pt-6">
          125 Big fella St. Road, New York, Hi 5654775Phone: 326487652 Email:
          example@mail.com Office Time: 9AM- 4PM
        </p>
      </div>
      <div className="pl-[140px] pt-8">
        <p className="w-[130px] border-b-[2px] border-black pb-2 text-center text-lg text-white">
          Keep In Touch
        </p>
        <TextInput placeholder="Gmail" className="mt-6 w-[200px] py-[6px]" />
      </div>
    </div>
  )
}

export default Footer
