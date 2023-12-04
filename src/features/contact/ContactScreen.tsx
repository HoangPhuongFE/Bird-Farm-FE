import BaseButton from 'components/button/BaseButton'
import TextInput from 'components/input/TextInput'
import { BsFacebook, BsGoogle, BsInstagram, BsYoutube } from 'react-icons/bs'

const ContactScreen = () => {
  return (
    <div>
      <div className="bg-[#D9D9D9]">
        <p className="py-[60px] text-center text-3xl font-medium">Contact</p>
      </div>
      <div className="mx-[220px] mt-10 grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-xl font-medium">Get In Touch</p>
          <div className="grid grid-cols-2 gap-4">
            <TextInput placeholder="Your name" className="bg-white py-[6px]" />
            <TextInput
              placeholder="Email address"
              className="bg-white py-[6px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput placeholder="Subject" className="bg-white py-[6px]" />
            <TextInput
              placeholder="phone number"
              className="bg-white py-[6px]"
            />
          </div>
          <div>
            <textarea
              className="w-full border-2 border-slate-500 pl-2 pt-2"
              name=""
              id=""
              rows={4}
            ></textarea>
          </div>
          <div>
            <BaseButton title="send message" className="px-4 py-[6px]" />
          </div>
        </div>
        <div>
          <p className="text-xl font-medium">Contact Information</p>
          <p className="pt-4 text-gray-600">Quan 1 HCM</p>
          <div className="grid grid-cols-2 gap-10 pt-6">
            <div>
              <p className="text-lg font-medium">Email us</p>
              <BaseButton
                title="abc@gmail.com"
                className="mt-2 rounded-md bg-red-500 px-4 py-[6px]"
              />
            </div>
            <div>
              <p className="text-lg font-medium">Phone us</p>
              <BaseButton
                title="02341231231"
                className="mt-2 rounded-md bg-red-500 px-4 py-[6px]"
              />
            </div>
          </div>
          <div className="pt-10">
            <p className="text-lg font-medium">Follow us</p>
            <div className="flex items-center space-x-4 pt-6">
              <BsFacebook />
              <BsGoogle />
              <BsInstagram />
              <BsYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactScreen
