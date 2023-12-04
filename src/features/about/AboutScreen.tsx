import { BsFillTelephoneFill } from 'react-icons/bs'

const AboutScreen = () => {
  return (
    <div>
      <div className="bg-[#D9D9D9]">
        <p className="py-[70px] text-center text-3xl font-medium">About</p>
      </div>
      <div className="">
        <div className="mx-[220px] mt-8 grid grid-cols-2 gap-4">
          <div className="">
            <p className="text-red-500">About us</p>
            <p className="pt-4 text-3xl font-medium">
              We Are Committed To Provide Safe Ride Solutions
            </p>
            <p className="pt-5 font-light">
              We Are Committed To Provide Safe Ride Solutions We Are Committed
              To Provide Safe Ride Solutions We Are Committed To Provide Safe
              Ride Solutions We Are Committed To Provide Safe Ride SolutionsWe
              Are Committed To Provide Safe Ride Solutions
            </p>
            <div className="flex items-center space-x-4 pt-6">
              <BsFillTelephoneFill size="30" color="red" />
              <div>
                <p className="text-red-500">Need Any Help</p>
                <p>0987654321</p>
              </div>
            </div>
          </div>
          <div>
            <img src="src/assets/image/test.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="ml-10 mt-10">
        <img src="src/assets/image/some-word.png" alt="" />
      </div>
    </div>
  )
}

export default AboutScreen
