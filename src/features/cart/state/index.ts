import { IBird } from 'features/products/types'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const cartAtom = atomWithStorage<IBird[]>('cart', [])
const addToCartAtom = atom(null, (get, set, bird: IBird) => {
  const currentCart = get(cartAtom)
  const existingItem = currentCart.find((item) => item.id === bird.id)

  if (existingItem) {
    const updatedCart = currentCart.map((item) =>
      item.id === bird.id ? { ...item, quantity: item.quantity + 1 } : item
    )
    set(cartAtom, updatedCart)
  } else {
    set(cartAtom, [...currentCart, { ...bird, quantity: 1 }])
  }
})

const removeCartAtom = atom(null, (get, set, birdId: number) => {
  const currentCart = get(cartAtom)
  const updatedCart = currentCart.filter((bird) => bird.id !== birdId)
  set(cartAtom, updatedCart)
})
const increaseQuantityAtom = atom(null, (get, set, birdId: number) => {
  const currentCart = get(cartAtom)
  const updatedCart = currentCart.map((item) =>
    item.id === birdId ? { ...item, quantity: item.quantity + 1 } : item
  )
  set(cartAtom, updatedCart)
})

const decreaseQuantityAtom = atom(null, (get, set, birdId: number) => {
  const currentCart = get(cartAtom)
  const item = currentCart.find((item) => item.id === birdId)

  if (item && item.quantity > 1) {
    const updatedCart = currentCart.map((item) =>
      item.id === birdId ? { ...item, quantity: item.quantity - 1 } : item
    )
    set(cartAtom, updatedCart)
  } else {
    const currentCart = get(cartAtom)
    const updatedCart = currentCart.filter((bird) => bird.id !== birdId)
    set(cartAtom, updatedCart)
  }
})
export {
  addToCartAtom,
  cartAtom,
  decreaseQuantityAtom,
  increaseQuantityAtom,
  removeCartAtom
}
