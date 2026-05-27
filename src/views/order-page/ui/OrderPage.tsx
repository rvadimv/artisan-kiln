import { ShoppingCart } from '@/widgets/shopping-cart/ui/ShoppingCart'
import { CheckoutForm } from '@/features/checkout/ui/CheckoutForm'

export const OrderPage = () => {
  return (
    <main className="min-h-screen bg-stone-950 px-4 py-8 text-stone-50">
      <div className="mx-auto max-w-5xl">
        <header>
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">The Artisan Kiln</p>
          <h1 className="mt-3 text-4xl font-semibold">Craft your perfect tile order</h1>
          <p className="mt-4 max-w-2xl text-stone-300">
            Configure square footage, review your cart, and prepare your custom ceramic tile order.
          </p>
        </header>

        <div className="mt-8">
          <ShoppingCart />
        </div>
        <div className="mt-8">
          <CheckoutForm />
        </div>
      </div>
    </main>
  )
}
