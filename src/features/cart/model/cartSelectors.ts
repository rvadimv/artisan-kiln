import { tiles } from '@/entities/tile/model/data'
import { calculateTotals } from '@/shared/lib/calculateTotals'
import type { RootState } from '@/shared/model/store'

export const selectCartItems = (state: RootState) => state.cart.items

export const selectCartItemsWithTiles = (state: RootState) =>
  state.cart.items.map((item) => {
    const tile = tiles.find(({ id }) => id === item.tileId)

    return {
      ...item,
      tile,
    }
  })

export const selectCartTotals = (state: RootState) =>
  calculateTotals({
    items: state.cart.items,
    tiles,
  })
