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

export function PaymentMethodSelector({ register, selectedMethod }: PaymentMethodSelectorProps) {
  return (
    <fieldset className="border-2 border-[#111111] bg-[#f6eedc]">
      <legend className="ml-3 px-2 text-sm font-black uppercase">Select Payment Method:</legend>

      <div className="grid grid-cols-2">
        {paymentMethods.map((method) => {
          const isSelected = selectedMethod === method

          return (
            <label
              key={method}
              className="flex cursor-pointer items-center gap-3 border-[#111111] p-3 text-sm font-black uppercase odd:border-r-2 [&:nth-child(-n+2)]:border-b-2"
            >
              <input
                type="radio"
                value={method}
                className="size-5 accent-[#111111]"
                {...register('paymentMethod')}
              />

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
