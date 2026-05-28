import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '@/features/cart/model/cartSlice'
import { designToolReducer } from '@/features/design-tool/model/designToolSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    designTool: designToolReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
