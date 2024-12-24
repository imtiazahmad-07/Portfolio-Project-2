import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/add-cart/addCartSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})