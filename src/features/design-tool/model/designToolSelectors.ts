import { createSelector } from '@reduxjs/toolkit'
import { tiles } from '@/entities/tile/model/data'
import type { RootState } from '@/shared/model/store'

const tileById = new Map(tiles.map((tile) => [tile.id, tile]))

export const selectDesignTool = (state: RootState) => state.designTool

export const selectSelectedTileId = (state: RootState) => state.designTool.selectedTileId

export const selectDesignGrid = (state: RootState) => state.designTool.grid

export const selectSelectedTile = createSelector([selectSelectedTileId], (selectedTileId) =>
  tileById.get(selectedTileId),
)

export const selectDesignGridCells = createSelector([selectDesignGrid], (grid) =>
  grid.map((tileId) => ({
    tileId,
    tile: tileId ? tileById.get(tileId) : null,
  })),
)
