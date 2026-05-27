'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useWatch, type FieldError, type UseFormRegister } from 'react-hook-form'
import { checkoutSchema, type CheckoutFormValues } from '@/features/checkout/model/checkoutSchema'
import { PaymentMethodSelector } from '@/features/checkout/ui/PaymentMethodSelector'
import type { InputHTMLAttributes } from 'react'

type TextFieldProps = {
  label: string
  name: keyof CheckoutFormValues
  register: UseFormRegister<CheckoutFormValues>
  error?: FieldError
  type?: string
  placeholder?: string
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode']
}

const TextField = ({
  label,
  name,
  register,
  error,
  inputMode,
  type = 'text',
  placeholder,
}: TextFieldProps) => {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-black uppercase">{label}</span>

      <input
        type={type}
        placeholder={placeholder}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        className="w-full border-2 border-[#111111] bg-[#f6eedc] px-3 py-2 text-sm font-bold shadow-[2px_2px_0_#111111] outline-none focus:bg-white"
        {...register(name)}
      />

      {error && <span className="mt-1 block text-xs font-bold text-red-700">{error.message}</span>}
    </label>
  )
}

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      customerName: '',
      phone: '',
      email: '',
      shippingAddress: '',
      projectNotes: '',
      paymentMethod: 'credit-card',
      cardNumber: '',
      cardExpiry: '',
      cardCvc: '',
    },
  })

  const selectedPaymentMethod = useWatch({
    control,
    name: 'paymentMethod',
  })

  const onSubmit = (values: CheckoutFormValues) => {
    console.log('Checkout form submitted:', values)
  }

  return (
    <section className="w-full text-[#111111]">
      <h2 className="mb-2 text-xl font-black uppercase tracking-tight md:text-2xl">Checkout</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 border-2 border-[#111111] bg-[#f6eedc] p-4 shadow-[4px_4px_0_#111111]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <TextField
            label="Customer Name"
            name="customerName"
            register={register}
            error={errors.customerName}
            placeholder="A. Smith"
          />

          <TextField
            label="Phone"
            name="phone"
            register={register}
            error={errors.phone}
            inputMode="tel"
            placeholder="+1 555 123 4567"
          />

          <TextField
            label="Email"
            name="email"
            register={register}
            error={errors.email}
            type="email"
            placeholder="customer@example.com"
          />

          <TextField
            label="Shipping Address"
            name="shippingAddress"
            register={register}
            error={errors.shippingAddress}
            placeholder="221B Baker Street"
          />

          <div className="md:col-span-2">
            <TextField
              label="Project Name / Notes"
              name="projectNotes"
              register={register}
              error={errors.projectNotes}
              placeholder="Kitchen backsplash, blue accent tiles..."
            />
          </div>
        </div>

        <PaymentMethodSelector register={register} selectedMethod={selectedPaymentMethod} />

        {selectedPaymentMethod === 'credit-card' && (
          <div className="grid gap-4 border-2 border-[#111111] bg-[#eadfca] p-3 md:grid-cols-3">
            <div className="md:col-span-3">
              <TextField
                label="Card Number"
                name="cardNumber"
                register={register}
                error={errors.cardNumber}
                inputMode="numeric"
                placeholder="1234567812345678"
              />
            </div>

            <TextField
              label="Expiry"
              name="cardExpiry"
              register={register}
              error={errors.cardExpiry}
              placeholder="MM/YY"
            />

            <TextField
              label="CVC"
              name="cardCvc"
              register={register}
              error={errors.cardCvc}
              placeholder="123"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full border-2 border-[#111111] bg-[#111111] px-4 py-3 text-sm font-black uppercase text-[#f6eedc] shadow-[3px_3px_0_#5fa792]"
        >
          Place Order
        </button>

        {isSubmitSuccessful && (
          <p className="text-sm font-bold text-emerald-800">Order data is valid.</p>
        )}
      </form>
    </section>
  )
}
