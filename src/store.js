import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/add-cart/addCartSlice'
import productReducer from './Slices/products/productsSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productReducer,
    },
})