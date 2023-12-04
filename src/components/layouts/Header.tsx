import TextInput from 'components/input/TextInput'
import { logoutSuccess, userAtom } from 'features/auth/state'
import { cartAtom } from 'features/cart/state'
import { useAtom, useSetAtom } from 'jotai'
import { BsPersonFill } from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import { IoCart } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [carts, setCarts] = useAtom(cartAtom)
  const navigate = useNavigate()
  const [user] = useAtom(userAtom)
  const logoutUser = useSetAtom(logoutSuccess)
  const handleLogout = () => {
    logoutUser()
    setCarts([])
    navigate('/sign-in')
  }

  return (
    <div>
      <div className="flex items-center justify-between bg-primary px-[160px] py-[10px] text-slate-200">
        <div className="pl-[60px] text-sm font-medium">
          <p>Monday to Friday</p>
          <p>9:00am - 6:00pm</p>
        </div>
        <div className="flex space-x-4">
          <FaPhone
            className="rotate-90 cursor-pointer hover:text-gray-300"
            size="20"
          />
          <p>091234567</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-slate-200 px-[150px] py-7">
        <div className="flex items-center space-x-2">
          <div className="cursor-pointer">
            <img
              src="src/assets/image/logo.png"
              alt="logo"
              className=" w-[80%]"
            />
          </div>
          <div className="relative flex space-x-5">
            <Link to="/">
              <p className="  cursor-pointer text-base font-medium  text-primary hover:opacity-60">
                HOME
              </p>
            </Link>
            <Link to="/about">
              <p className="  cursor-pointer text-base font-medium  text-primary hover:opacity-60">
                ABOUT
              </p>
            </Link>

            <div className=" group relative cursor-pointer text-base font-medium">
              <p className="text-primary hover:opacity-60 ">SERVICE</p>
              <div className="absolute -left-10 top-[24px] hidden space-y-2 bg-white py-1  text-primary shadow-2xl group-hover:block  ">
                <div>
                  <Link to="/compare">
                    <p className="px-3 py-1 hover:bg-primary hover:text-white">
                      COMPARE
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/grafting">
                    <p className="px-3 py-1 hover:bg-primary hover:text-white">
                      GRAFTING
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/product">
              <p className="  cursor-pointer text-base font-medium  text-primary ">
                PRODUCTS
              </p>
            </Link>
            <Link to="/blog">
              <p className="  cursor-pointer text-base font-medium  text-primary hover:opacity-60">
                BLOG
              </p>
            </Link>
            <Link to="/contact">
              <p className="  cursor-pointer text-base font-medium  text-primary hover:opacity-60">
                CONTACT
              </p>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="relative ">
            <TextInput
              className="w-[200px] px-3 py-[5px]"
              placeholder="search"
            />
            <GoSearch
              size="22"
              className="absolute right-3 top-[8px] text-primary"
            />
          </div>
          <div className="group relative flex items-center space-x-2 text-[#290B7C]">
            <BsPersonFill
              size="30"
              className="cursor-pointer hover:text-gray-600"
            />
            {user.currentUser ? (
              <div className="absolute -left-[50px] top-7 hidden space-y-2 rounded-md bg-white shadow-xl group-hover:block">
                <p className="cursor-pointer px-4 py-1 hover:bg-primary hover:text-white">
                  Settings
                </p>

                <p
                  className="cursor-pointer px-4 py-1 hover:bg-primary hover:text-white"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            ) : (
              <div className="absolute -left-[50px] top-7 hidden space-y-2 rounded-md bg-white shadow-xl group-hover:block">
                <p
                  onClick={() => navigate('sign-in')}
                  className="cursor-pointer px-4 py-1 hover:bg-primary hover:text-white"
                >
                  Login
                </p>
              </div>
            )}

            {user && (
              <p className="cursor-pointer">{user.currentUser?.username}</p>
            )}
          </div>
          <div className="relative">
            <IoCart
              onClick={() => navigate('/cart')}
              size="30"
              className="cursor-pointer text-[#290B7C] hover:opacity-70"
            />
            {carts.length > 0 && (
              <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-sm text-white">
                {carts.length}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
