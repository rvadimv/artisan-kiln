import { CheckoutForm } from '@/features/checkout/ui/CheckoutForm'
import { DesignWorkspace } from '@/widgets/design-workspace/ui/DesignWorkspace'
import { ShoppingCart } from '@/widgets/shopping-cart/ui/ShoppingCart'

export function OrderPage() {
  return (
    <main className="min-h-screen bg-[#f6eedc] px-4 py-8 text-[#111111]">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-black uppercase">Ceramic Tile Order Form</h1>
          <p className="mt-2 text-xl font-black uppercase">The Artisan Kiln</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-8">
            <ShoppingCart />
            <CheckoutForm />
          </div>

          <DesignWorkspace />
        </div>
      </div>
    </main>
  )
}
