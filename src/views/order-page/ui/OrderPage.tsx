import Image from 'next/image'

import { CheckoutForm } from '@/features/checkout/ui/CheckoutForm'
import { DesignWorkspace } from '@/widgets/design-workspace/ui/DesignWorkspace'
import { PageDecor } from '@/widgets/page-decor/ui/PageDecor'
import { ShoppingCart } from '@/widgets/shopping-cart/ui/ShoppingCart'

export const OrderPage = () => {
  return (
    <main className="min-h-screen bg-kiln-paper font-body text-kiln-ink">
      <div className="relative mx-auto min-h-screen w-full max-w-[1600px] overflow-hidden px-4 pb-0 pt-8 xl:pb-[150px]">
        <PageDecor />

        <div className="relative z-10 mx-auto w-full max-w-[1258px]">
          <header className="mb-8 text-center">
            <h1 className="font-display text-5xl font-medium uppercase tracking-[0.04em]">
              Ceramic Tile Order Form
            </h1>

            <p className="mt-2 text-2xl font-medium uppercase tracking-[0.03em]">
              The Artisan Kiln
            </p>
          </header>

          <div className="xl:hidden">
            <CheckoutForm variant="mobile" cartSlot={<ShoppingCart showTitle={false} />} />

            <div
              aria-hidden="true"
              className="z-11 relative mx-auto mt-[-50px] w-full max-w-[768px]"
            >
              <Image
                src="/images/decor/mobile-bottom-decor2.png"
                alt=""
                width={768}
                height={240}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="hidden items-start gap-6 xl:grid xl:grid-cols-[382px_520px_308px]">
            <ShoppingCart />
            <DesignWorkspace />
            <CheckoutForm variant="desktop" />
          </div>
        </div>
      </div>
    </main>
  )
}
