import BaseButton from 'components/button/BaseButton'
import TextInput from 'components/input/TextInput'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { ImKey } from 'react-icons/im'
const SignUpScreen = () => {
  return (
    <div>
      <div className="bg-[#D9D9D9]">
        <p className="py-[70px] text-center text-3xl font-medium">
          Create Account
        </p>
      </div>
      <div className="mx-auto mt-10 h-[500px] w-[550px] bg-gray-200">
        <div className="flex items-center justify-center space-x-3 pt-6">
          <ImKey size="24" color="red" />
          <p className="text-2xl font-medium">Sign up</p>
        </div>
        <form className="p-[40px]">
          <div className="space-y-6">
            <div className="flex items-center space-x-[78px]">
              <div>Username</div>
              <TextInput
                className="w-[250px] bg-white py-[6px]"
                placeholder="username"
              />
            </div>
            <div className="flex items-center space-x-[112px]">
              <div>Email</div>
              <TextInput
                className="w-[250px] bg-white py-[6px]"
                placeholder="email"
              />
            </div>
            <div className="flex items-center space-x-[82px]">
              <div>Password</div>
              <TextInput
                className="w-[250px] bg-white py-[6px]"
                placeholder="password"
              />
            </div>
            <div className="flex items-center space-x-[20px]">
              <div>Confirm Password</div>
              <TextInput
                className="w-[250px] bg-white py-[6px]"
                placeholder="confirm password"
              />
            </div>
          </div>
          <div className="pt-10 text-center">
            <BaseButton
              title="Register"
              className="bg-slate-600 px-8 py-[6px]"
            />
          </div>
        </form>

        <div className="flex justify-between px-6">
          <div className="flex w-[220px] cursor-pointer items-center justify-center space-x-5 rounded-md border-[1px] border-blue-600 bg-blue-500 py-1 text-white hover:bg-blue-400">
            <FaFacebook />
            <p>Tiếp tục với facebook</p>
          </div>
          <div className="flex w-[220px] cursor-pointer items-center justify-center space-x-5 rounded-md border-[1px] border-slate-500 bg-white py-1 hover:bg-slate-300 ">
            <FcGoogle />
            <p>Tiếp tục với google</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpScreen
