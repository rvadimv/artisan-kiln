import { CheckoutForm } from '@/features/checkout/ui/CheckoutForm'
import { DesignWorkspace } from '@/widgets/design-workspace/ui/DesignWorkspace'
import { ShoppingCart } from '@/widgets/shopping-cart/ui/ShoppingCart'

export const OrderPage = () => {
  return (
    <main className="min-h-screen bg-kiln-paper px-4 py-8 font-body text-kiln-ink">
      <div className="mx-auto w-full max-w-[1258px]">
        <header className="mb-8 text-center">
          <h1 className="font-display text-5xl font-medium uppercase tracking-[0.04em]">
            Ceramic Tile Order Form
          </h1>

          <p className="mt-2 text-2xl font-medium uppercase tracking-[0.03em]">The Artisan Kiln</p>
        </header>

        <div className="xl:hidden">
          <CheckoutForm variant="mobile" cartSlot={<ShoppingCart showTitle={false} />} />
        </div>

        <div className="hidden items-start gap-6 xl:grid xl:grid-cols-[382px_520px_308px]">
          <ShoppingCart />
          <DesignWorkspace />
          <CheckoutForm variant="desktop" />
        </div>
      </div>
    </main>
  )
}
