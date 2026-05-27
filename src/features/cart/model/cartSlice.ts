import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialCartItems } from '@/entities/tile/model/data'
import type { CartItem, TileId } from '@/entities/tile/model/types'

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
    changeQuantity: (
      state,
      action: PayloadAction<{
        tileId: TileId
        quantity: number
      }>,
    ) => {
      const item = state.items.find(({ tileId }) => tileId === action.payload.tileId)

      if (!item) {
        return
      }

      item.quantity = Math.max(1, action.payload.quantity)
    },

    removeCartItem: (state, action: PayloadAction<TileId>) => {
      state.items = state.items.filter(({ tileId }) => tileId !== action.payload)
    },
  },
})

export const { changeQuantity, removeCartItem } = cartSlice.actions
export const cartReducer = cartSlice.reducer
