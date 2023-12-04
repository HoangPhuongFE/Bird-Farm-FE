import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { IUser } from 'types'

interface ILogged {
  isLogged: boolean
  currentUser: Partial<IUser> | null
}

const userAtom = atomWithStorage<ILogged>('user', {
  isLogged: false,
  currentUser: null
})

const loginSuccess = atom(null, (get, set, user: Partial<IUser>) => {
  set(userAtom, { isLogged: true, currentUser: user })
})
const logoutSuccess = atom(null, (get, set) => {
  set(userAtom, { isLogged: false, currentUser: null })
})

export { loginSuccess, logoutSuccess, userAtom }
