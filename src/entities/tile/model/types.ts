export type TileId = 'ocean-wave' | 'forest-fern' | 'terracotta-dot' | 'yellow-star'

export type Tile = {
  id: TileId
  name: string
  pricePerSqFt: number
  previewImageUrl: string
  patternImageUrl: string
}
