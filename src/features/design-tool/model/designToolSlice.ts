import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { TileId } from '@/entities/tile/model/types'
import type { DesignToolState } from './types'

const GRID_SIZE = 36

const initialState: DesignToolState = {
  selectedTileId: 'ocean-wave',
  grid: Array<null>(GRID_SIZE).fill(null),
}

export const designToolSlice = createSlice({
  name: 'designTool',
  initialState,
  reducers: {
    selectTile: (state, action: PayloadAction<TileId>) => {
      state.selectedTileId = action.payload
    },

    placeTile: (state, action: PayloadAction<number>) => {
      const cellIndex = action.payload

      if (cellIndex < 0 || cellIndex >= state.grid.length) {
        return
      }

      state.grid[cellIndex] = state.selectedTileId
    },

    clearCell: (state, action: PayloadAction<number>) => {
      const cellIndex = action.payload

      if (cellIndex < 0 || cellIndex >= state.grid.length) {
        return
      }

      state.grid[cellIndex] = null
    },

    resetGrid: (state) => {
      state.grid = Array<null>(GRID_SIZE).fill(null)
    },
  },
})

export const { selectTile, placeTile, clearCell, resetGrid } = designToolSlice.actions
export const designToolReducer = designToolSlice.reducer
