/* eslint-disable indent */
import { ReactNode, createContext, useReducer } from 'react'

type Idata = {
  id: string
  name: string
  price: string
  image: string
  inStock: number
  ratings: number
  fastDelivery: boolean
}
type CartContext = {
  state: Idata[]
  dispatch: any
}
type action = {
  type: 'add'
  payload: Idata
}
export const CartContext = createContext<[] | CartContext>([])
// ..................................................
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
// ..................................................
const reducer = (state: Idata[], action: action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    default:
      return state
  }
}

