import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.js'   
import authSlice from './authSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice
  },
})