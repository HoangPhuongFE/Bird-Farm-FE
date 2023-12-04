import { useMutation } from '@tanstack/react-query'
import BaseButton from 'components/button/BaseButton'
import TextInput from 'components/input/TextInput'
import { useSetAtom } from 'jotai'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { signIn } from './service/signIn'
import { loginSuccess } from './state'

type IFormLogin = {
  email: string
  password: string
}

const SignInScreen = () => {
  const { handleSubmit, register } = useForm<IFormLogin>()
  const navigate = useNavigate()

  const setCurrentUser = useSetAtom(loginSuccess)

  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: async (data) => {
      setCurrentUser(data)
      navigate('/')
    },
    onError: async (error) => {
      toast.error('Email hoặc mật khẩu không chính xác')
    }
  })

  const onSubmit = (data: IFormLogin) => {
    console.log(data)
    mutation.mutate(data)
  }
  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="bg-primary">
        <p className="py-[50px] text-center text-3xl font-medium text-white">
          Login
        </p>
      </div>
      <div className="mx-auto mt-10  w-[550px] bg-gray-200">
        <div className="flex items-center justify-center space-x-3 pt-6">
          <p className="text-2xl font-medium text-primary">Sign in</p>
        </div>
        <form
          className="px-[40px] pb-10 pt-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-8">
            <div className="flex items-center space-x-[114px]">
              <div className="text-primary">Email</div>
              <TextInput
                className="w-[250px] bg-white py-[6px]"
                placeholder="email"
                {...register('email')}
              />
            </div>
            <div className="flex items-center space-x-[84px]">
              <div className="text-primary">Password</div>
              <TextInput
                className=" w-[250px] bg-white py-[6px]"
                placeholder="password"
                type="password"
                {...register('password')}
              />
            </div>
          </div>
          <div className="flex justify-between pt-10 text-primary">
            <p className="cursor-pointer text-sm font-semibold">
              Forgot password
            </p>
            <div className="flex items-center ">
              <input type="checkbox" className="w-6" id="keep" />
              <label
                className="ml-2 cursor-pointer text-sm font-semibold"
                htmlFor="keep"
              >
                Keep me Signed in
              </label>
            </div>
          </div>
          <div className="pt-10 text-center">
            <BaseButton title="Login" className="bg-slate-600 px-8 py-[6px]" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInScreen
