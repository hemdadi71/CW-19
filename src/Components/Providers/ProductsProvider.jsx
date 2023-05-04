// @ts-nocheck
import React, { useContext, useReducer } from 'react'
// .........................................................
const ProductContext = React.createContext() // state
const ProductContextDispatcher = React.createContext() //setState
// .........................................................
const initialState = [
  { title: 'React.js', price: '$99', id: '1', quantity: 1 },
  { title: 'Node.js', price: '$89', id: '2', quantity: 2 },
  { title: 'JavaScript', price: '$79', id: '3', quantity: 3 },
]
// ...........................................................
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      const index = state.findIndex(item => item.id === action.id)
      const product = { ...state[index] }
      const updatedProducts = [...state]
      product.quantity++
      updatedProducts[index] = product
      return updatedProducts
    }
    case 'decrement': {
      const index = state.findIndex(item => item.id === action.id)
      const product = { ...state[index] }
      if (product.quantity === 1) {
        const filteredProducts = state.filter(item => item.id !== action.id)
        return filteredProducts
      } else {
        const updatedProducts = [...state]
        product.quantity--
        updatedProducts[index] = product
        return updatedProducts
      }
    }
    case 'remove': {
      const filteredProducts = state.filter(item => item.id !== action.id)
      return filteredProducts
    }
    case 'edit': {
      const index = state.findIndex(item => item.id === action.id)
      const product = { ...state[index] }
      product.title = action.event.target.value
      const updatedProducts = [...state]
      updatedProducts[index] = product
      return updatedProducts
    }
    default:
      return state
  }
}
// ...................................................................
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState)

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  )
}
export default ProductsProvider
// ...................................................................
export const useProducts = () => useContext(ProductContext)
export const useProductsAction = () => useContext(ProductContextDispatcher)
