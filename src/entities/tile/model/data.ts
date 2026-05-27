import type { CartItem, Tile } from './types'

export const tiles: Tile[] = [
  {
    id: 'ocean-wave',
    name: 'Ocean Wave',
    price: 28,
    imageAlt: 'Ocean Wave tile pattern',
    swatchClassName: 'bg-blue-800',
  },
  {
    id: 'forest-fern',
    name: 'Forest Fern',
    price: 30,
    imageAlt: 'Forest Fern tile pattern',
    swatchClassName: 'bg-emerald-700',
  },
  {
    id: 'terracotta-dot',
    name: 'Terracotta Dot',
    price: 26,
    imageAlt: 'Terracotta Dot tile pattern',
    swatchClassName: 'bg-orange-700',
  },
  {
    id: 'yellow-star',
    name: 'Yellow Star',
    price: 29,
    imageAlt: 'Yellow Star tile pattern',
    swatchClassName: 'bg-yellow-500',
  },
]

export const initialCartItems: CartItem[] = [
  { tileId: 'ocean-wave', quantity: 150 },
  { tileId: 'forest-fern', quantity: 75 },
  { tileId: 'terracotta-dot', quantity: 200 },
  { tileId: 'yellow-star', quantity: 50 },
]
