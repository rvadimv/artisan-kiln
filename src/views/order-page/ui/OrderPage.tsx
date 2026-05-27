import { initialCartItems, tiles } from '@/entities/tile/model/data'
import { calculateTotals } from '@/shared/lib/calculateTotals'
import { formatCurrency } from '@/shared/lib/formatCurrency'

export function OrderPage() {
  const totals = calculateTotals({
    items: initialCartItems,
    tiles,
  })

  return (
    <main className="min-h-screen bg-stone-950 px-4 py-8 text-stone-50">
      <h1 className="text-3xl font-semibold">The Artisan Kiln</h1>
      <p className="mt-3 text-stone-300">Interactive ceramic tile order form.</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Initial tiles</h2>

        <ul className="mt-4 space-y-2">
          {tiles.map((tile) => (
            <li key={tile.id}>
              {tile.name} — {formatCurrency(tile.price)}
            </li>
          ))}
        </ul>

        <p className="mt-6 font-semibold">Subtotal: {formatCurrency(totals.subtotal)}</p>
        <p>Shipping: {formatCurrency(totals.shipping)}</p>
        <p>Grand total: {formatCurrency(totals.grandTotal)}</p>
      </section>
    </main>
  )
}
