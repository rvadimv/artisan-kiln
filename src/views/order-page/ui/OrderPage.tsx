import { CheckoutForm } from '@/features/checkout/ui/CheckoutForm'
import { DesignWorkspace } from '@/widgets/design-workspace/ui/DesignWorkspace'
import { PageDecor } from '@/widgets/page-decor/ui/PageDecor'
import { PageFooter } from '@/widgets/page-footer/ui/PageFooter'
import { PageHeader } from '@/widgets/page-header/ui/PageHeader'
import { PageNav } from '@/widgets/page-nav/ui/PageNav'
import { ShoppingCart } from '@/widgets/shopping-cart/ui/ShoppingCart'

export const OrderPage = () => {
  return (
    <main className="min-h-screen bg-kiln-paper font-body text-kiln-ink">
      <PageNav />

      <div className="relative mx-auto min-h-[calc(100vh-40px)] w-full max-w-[1600px] overflow-hidden">
        <PageDecor />

        <div className="relative z-10">
          <div className="mx-auto w-full max-w-[1258px] px-4">
            <PageHeader />

            <div className="xl:hidden">
              <CheckoutForm variant="mobile" cartSlot={<ShoppingCart showTitle={false} />} />
            </div>

            <div className="hidden items-start gap-4 xl:grid xl:grid-cols-[382px_520px_308px] 2xl:gap-6">
              <ShoppingCart />
              <DesignWorkspace />
              <CheckoutForm variant="desktop" />
            </div>
          </div>

          <PageFooter />
        </div>
      </div>
    </main>
  )
}
