import type { TileId } from '@/entities/tile/model/types'

export type DesignGridCell = TileId | null

export type DesignToolState = {
  selectedTileId: TileId
  grid: DesignGridCell[]
}
