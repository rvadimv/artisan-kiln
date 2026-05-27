import type { CartItem, Tile } from '@/entities/tile/model/types'

type CalculateTotalsParams = {
  items: CartItem[]
  tiles: Tile[]
}

export type OrderTotals = {
  subtotal: number
  shipping: number
  grandTotal: number
}

const FREE_SHIPPING_THRESHOLD = 500
const SHIPPING_PRICE = 25

export const calculateTotals = ({ items, tiles }: CalculateTotalsParams): OrderTotals => {
  const subtotal = items.reduce((total, item) => {
    const tile = tiles.find(({ id }) => id === item.tileId)

    if (!tile) {
      return total
    }

    return total + tile.price * item.quantity
  }, 0)

  const shipping = subtotal > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_PRICE

  return {
    subtotal,
    shipping,
    grandTotal: subtotal + shipping,
  }
}
