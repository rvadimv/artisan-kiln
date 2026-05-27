export type TileId = 'ocean-wave' | 'forest-fern' | 'terracotta-dot' | 'yellow-star'

export type Tile = {
  id: TileId
  name: string
  price: number
  imageAlt: string
  swatchClassName: string
}

export type CartItem = {
  tileId: TileId
  quantity: number
}
