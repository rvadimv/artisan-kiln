import type { UseFormRegister } from 'react-hook-form'
import type { CheckoutFormValues } from '@/features/checkout/model/checkoutSchema'
import { paymentMethods, type PaymentMethod } from '@/features/checkout/model/types'

type PaymentMethodSelectorProps = {
  register: UseFormRegister<CheckoutFormValues>
  selectedMethod: PaymentMethod
}

const paymentMethodLabel: Record<PaymentMethod, string> = {
  'credit-card': 'Credit/Debit Card',
  paypal: 'PayPal',
  'apple-pay': 'Apple Pay',
  'bank-transfer': 'Bank Transfer',
}

export const PaymentMethodSelector = ({ register, selectedMethod }: PaymentMethodSelectorProps) => {
  return (
    <fieldset className="border-2 border-kiln-ink bg-kiln-paper">
      <legend className="ml-3 px-2 text-sm font-black uppercase leading-none">
        Select Payment Method:
      </legend>

      <div className="grid grid-cols-2">
        {paymentMethods.map((method) => {
          const isSelected = selectedMethod === method

          return (
            <label
              key={method}
              className="flex h-[52px] cursor-pointer items-center gap-3 border-kiln-ink px-3 text-sm font-black uppercase leading-tight odd:border-r-2 [&:nth-child(-n+2)]:border-b-2"
            >
              <input
                type="radio"
                value={method}
                className="peer sr-only"
                {...register('paymentMethod')}
              />

              <span className="grid size-5 shrink-0 place-items-center rounded-full border border-kiln-ink bg-kiln-paper">
                <span
                  className={`size-3 rounded-full ${isSelected ? 'bg-kiln-ink' : 'bg-transparent'}`}
                />
              </span>

              <span className={isSelected ? 'underline underline-offset-4' : undefined}>
                {paymentMethodLabel[method]}
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
