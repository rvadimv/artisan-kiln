import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { TileId } from '@/entities/tile/model/types'
import type { CartItem } from '@/features/cart/model/types'
import { initialCartItems } from '@/features/cart/model/data'

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: initialCartItems,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeAreaSqFt: (state, action: PayloadAction<{ tileId: TileId; areaSqFt: number }>) => {
      const item = state.items.find(({ tileId }) => tileId === action.payload.tileId)

      if (!item) {
        return
      }

      item.areaSqFt = Math.max(1, action.payload.areaSqFt)
    },
    increaseAreaSqFt: (state, action: PayloadAction<TileId>) => {
      const item = state.items.find(({ tileId }) => tileId === action.payload)

      if (!item) {
        return
      }

      item.areaSqFt += 1
    },
    decreaseAreaSqFt: (state, action: PayloadAction<TileId>) => {
      const item = state.items.find(({ tileId }) => tileId === action.payload)

      if (!item) {
        return
      }

      if (item.areaSqFt <= 1) {
        state.items = state.items.filter(({ tileId }) => tileId !== action.payload)
        return
      }

      item.areaSqFt -= 1
    },

    removeCartItem: (state, action: PayloadAction<TileId>) => {
      state.items = state.items.filter(({ tileId }) => tileId !== action.payload)
    },
  },
})

export const { changeAreaSqFt, increaseAreaSqFt, decreaseAreaSqFt, removeCartItem } =
  cartSlice.actions
export const cartReducer = cartSlice.reducer
