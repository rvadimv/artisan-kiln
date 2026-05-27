import { createSelector } from '@reduxjs/toolkit'
import { tiles } from '@/entities/tile/model/data'
import { calculateTotals } from '@/shared/lib/calculateTotals'
import type { RootState } from '@/shared/model/store'

const tileById = new Map(tiles.map((tile) => [tile.id, tile]))

export const selectCartItems = (state: RootState) => state.cart.items

export const selectCartItemsWithTiles = createSelector([selectCartItems], (items) =>
  items.map((item) => ({
    ...item,
    tile: tileById.get(item.tileId),
  })),
)

export const selectCartTotals = createSelector([selectCartItems], (items) =>
  calculateTotals({
    items,
    tiles,
  }),
)
