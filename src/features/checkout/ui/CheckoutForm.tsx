'use client'

import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useWatch, type FieldError, type UseFormRegister } from 'react-hook-form'
import { checkoutSchema, type CheckoutFormValues } from '@/features/checkout/model/checkoutSchema'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { selectCartTotals } from '@/features/cart/model/cartSelectors'
import { useAppSelector } from '@/shared/model/hooks'
import { formatCurrency } from '@/shared/lib/formatCurrency'

type TextFieldProps = {
  label: string
  name: keyof CheckoutFormValues
  register: UseFormRegister<CheckoutFormValues>
  error?: FieldError
  type?: string
  placeholder?: string
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode']
}

type CheckoutFormProps = {
  variant?: 'mobile' | 'desktop'
  cartSlot?: ReactNode
}

const TextLineField = ({
  label,
  name,
  register,
  error,
  inputMode,
  type = 'text',
}: TextFieldProps) => {
  return (
    <label className="block">
      <span className="grid grid-cols-[auto_1fr] items-end gap-1">
        <span className="whitespace-nowrap text-[13px] font-medium uppercase leading-none">
          {label}
        </span>

        <input
          type={type}
          inputMode={inputMode}
          aria-invalid={Boolean(error)}
          className="min-w-0 border-0 border-b-2 border-kiln-ink bg-transparent px-1 text-[13px] font-medium leading-none outline-none"
          {...register(name)}
        />
      </span>

      <span className="mt-0.5 block min-h-[11px] text-[10px] font-medium uppercase leading-none text-red-700">
        {error?.message ?? ''}
      </span>
    </label>
  )
}

const TextBoxField = ({
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
      {label && <span className="mb-1 block text-xs font-medium uppercase">{label}</span>}

      <input
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className="h-[28px] w-full rounded-[5px] border-2 border-kiln-ink bg-kiln-paper px-2 text-sm font-medium outline-none placeholder:text-kiln-ink"
        {...register(name)}
      />

      {error && <span className="mt-1 block text-xs text-red-700">{error.message}</span>}
    </label>
  )
}

type PaymentOptionProps = {
  label: string
  value: CheckoutFormValues['paymentMethod']
  selectedMethod: CheckoutFormValues['paymentMethod']
  register: UseFormRegister<CheckoutFormValues>
}

const PaymentOption = ({ label, value, selectedMethod, register }: PaymentOptionProps) => {
  const isSelected = selectedMethod === value

  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-[13px] font-medium uppercase leading-none">
      <input type="radio" value={value} className="sr-only" {...register('paymentMethod')} />

      <span
        className={`block size-[14px] shrink-0 rounded-full border-2 border-kiln-ink ${
          isSelected ? 'bg-[#707D8D]' : 'bg-kiln-paper'
        }`}
      />

      {value === 'paypal' && (
        <span className="relative block h-[24px] w-[21px] shrink-0">
          <Image
            src="/images/payment/paypal-icon.png"
            alt=""
            fill
            sizes="21px"
            className="object-contain"
          />
        </span>
      )}

      {label && <span>{label}</span>}
    </label>
  )
}

const LargePaymentCard = ({ label, value, selectedMethod, register }: PaymentOptionProps) => {
  const isSelected = selectedMethod === value

  return (
    <label className="relative flex h-[81px] cursor-pointer flex-col items-center justify-end rounded-[6px] border-2 border-kiln-ink bg-kiln-paper px-2 pb-2 pt-3 font-medium uppercase">
      <input type="radio" value={value} className="sr-only" {...register('paymentMethod')} />

      <span
        className={`absolute left-3 top-4 block size-[18px] shrink-0 rounded-full border-2 border-kiln-ink ${
          isSelected ? 'bg-[#707D8D]' : 'bg-kiln-paper'
        }`}
      />

      <span className="mb-2 flex h-[32px] items-center justify-center">
        {value === 'apple-pay' ? (
          <span className="relative block h-[27px] w-[64px]">
            <Image
              src="/images/payment/apple-pay-icon.png"
              alt=""
              fill
              sizes="64px"
              className="object-contain"
            />
          </span>
        ) : (
          <span className="relative block h-[33px] w-[37px]">
            <Image
              src="/images/payment/bank-icon.png"
              alt=""
              fill
              sizes="37px"
              className="object-contain"
            />
          </span>
        )}
      </span>

      <span className="text-center text-[16px] font-medium leading-none">{label}</span>
    </label>
  )
}

const MobilePaymentCard = ({ label, value, selectedMethod, register }: PaymentOptionProps) => {
  const isSelected = selectedMethod === value

  return (
    <label
      className={`relative flex h-[82px] cursor-pointer flex-col items-center justify-end border-r-2 border-kiln-ink px-1 pb-2 last:border-r-0 ${
        isSelected ? 'bg-kiln-paperDark' : 'bg-kiln-paper'
      }`}
    >
      <input type="radio" value={value} className="sr-only" {...register('paymentMethod')} />

      <span
        className={`absolute left-2 top-3 block size-[14px] rounded-full border-2 border-kiln-ink ${
          isSelected ? 'bg-[#707D8D]' : 'bg-kiln-paper'
        }`}
      />

      <span className="mb-1 flex h-[34px] items-center justify-center">
        {value === 'credit-card' && (
          <span className="relative block h-[28px] w-[49px]">
            <Image
              src="/images/payment/card-icon.png"
              alt=""
              fill
              sizes="49px"
              className="object-contain"
            />
          </span>
        )}

        {value === 'paypal' && (
          <span className="relative block h-[24px] w-[21px]">
            <Image
              src="/images/payment/paypal-icon-m.png"
              alt=""
              fill
              sizes="21px"
              className="object-contain"
            />
          </span>
        )}

        {value === 'apple-pay' && (
          <span className="relative block h-[22px] w-[52px]">
            <Image
              src="/images/payment/apple-pay-icon2.png"
              alt=""
              fill
              sizes="52px"
              className="object-contain"
            />
          </span>
        )}

        {value === 'bank-transfer' && (
          <span className="relative block h-[28px] w-[31px]">
            <Image
              src="/images/payment/bank-icon2.png"
              alt=""
              fill
              sizes="31px"
              className="object-contain"
            />
          </span>
        )}
      </span>

      <span className="min-h-[20px] text-center text-[10px] font-medium uppercase leading-[10px]">
        {label}
      </span>
    </label>
  )
}

export const CheckoutForm = ({ variant = 'desktop', cartSlot }: CheckoutFormProps) => {
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

  const totals = useAppSelector(selectCartTotals)

  const onSubmit = (values: CheckoutFormValues) => {
    console.log('Checkout form submitted:', values)
  }

  return (
    <section className="mx-auto w-full max-w-[390px] text-kiln-ink xl:w-[308px]">
      {variant === 'mobile' ? (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-kiln-paper">
          <div className="space-y-1 text-sm font-medium uppercase leading-tight">
            <TextLineField
              label="Customer Name:"
              name="customerName"
              register={register}
              error={errors.customerName}
            />

            <div className="grid grid-cols-[1fr_1fr] gap-3">
              <TextLineField
                label="Phone:"
                name="phone"
                register={register}
                error={errors.phone}
                inputMode="tel"
              />

              <TextLineField
                label="Email:"
                name="email"
                register={register}
                error={errors.email}
                type="email"
              />
            </div>

            <TextLineField
              label="Shipping Address:"
              name="shippingAddress"
              register={register}
              error={errors.shippingAddress}
            />
          </div>

          {cartSlot && <div className="mt-6">{cartSlot}</div>}

          <fieldset className="mt-4 border-b-2 border-kiln-ink">
            <legend className="border-2 border-b-0 border-kiln-ink bg-kiln-paperDark px-2 py-[3px] text-[14px] font-medium uppercase leading-none">
              Select Payment Method:
            </legend>

            <div className="grid grid-cols-4 border-l-2 border-r-2 border-t-2 border-kiln-ink">
              <MobilePaymentCard
                label="Credit/Debit Card"
                value="credit-card"
                selectedMethod={selectedPaymentMethod}
                register={register}
              />

              <MobilePaymentCard
                label="PayPal"
                value="paypal"
                selectedMethod={selectedPaymentMethod}
                register={register}
              />

              <MobilePaymentCard
                label="Apple Pay"
                value="apple-pay"
                selectedMethod={selectedPaymentMethod}
                register={register}
              />

              <MobilePaymentCard
                label="Bank Transfer"
                value="bank-transfer"
                selectedMethod={selectedPaymentMethod}
                register={register}
              />
            </div>
          </fieldset>

          {selectedPaymentMethod === 'credit-card' && (
            <div className="mt-3 rounded-[6px] border-2 border-kiln-ink bg-kiln-paperDark px-3 py-2">
              <div className="mb-1 flex items-center gap-2">
                <PaymentOption
                  label=""
                  value="credit-card"
                  selectedMethod={selectedPaymentMethod}
                  register={register}
                />

                <span className="relative block h-[25px] w-[42px] shrink-0">
                  <Image
                    src="/images/payment/visa-icon.png"
                    alt=""
                    fill
                    sizes="42px"
                    className="object-contain"
                  />
                </span>

                <span className="relative block h-[26px] w-[42px] shrink-0">
                  <Image
                    src="/images/payment/mastercard-icon.png"
                    alt=""
                    fill
                    sizes="42px"
                    className="object-contain"
                  />
                </span>
              </div>

              <TextBoxField
                label="Card Number"
                name="cardNumber"
                register={register}
                error={errors.cardNumber}
                inputMode="numeric"
                placeholder="1234 4566 7723 8990"
              />

              <div className="mt-2 grid grid-cols-2 gap-3">
                <TextBoxField
                  label=""
                  name="cardExpiry"
                  register={register}
                  error={errors.cardExpiry}
                  placeholder="Expiration /"
                />

                <TextBoxField
                  label=""
                  name="cardCvc"
                  register={register}
                  error={errors.cardCvc}
                  placeholder="CVV"
                />
              </div>
            </div>
          )}

          <div className="mt-3">
            <TextLineField
              label="Project Name / Notes:"
              name="projectNotes"
              register={register}
              error={errors.projectNotes}
            />
          </div>

          <button
            type="submit"
            className="mt-4 h-[38px] w-full rounded-[6px] border-2 border-kiln-ink bg-[#3f4f7c] px-3 text-[18px] font-medium uppercase leading-none text-kiln-paper"
          >
            Place Secure Order
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-kiln-paper">
          <div className="mb-3 flex items-end bg-kiln-paperDark">
            <h2 className="shrink-0 rounded-t-[4px] border-2 border-b-0 border-kiln-ink bg-kiln-paperDark px-3 py-[5px] text-xl font-medium uppercase leading-none">
              Order Summary
            </h2>

            <div className="h-[2px] flex-1 bg-kiln-ink" />
          </div>

          <div className="space-y-1 text-sm font-medium uppercase leading-tight">
            <TextLineField
              label="Customer Name:"
              name="customerName"
              register={register}
              error={errors.customerName}
            />

            <div className="grid grid-cols-[1fr_1fr] gap-3">
              <TextLineField
                label="Phone:"
                name="phone"
                register={register}
                error={errors.phone}
                inputMode="tel"
              />

              <TextLineField
                label="Email:"
                name="email"
                register={register}
                error={errors.email}
                type="email"
              />
            </div>

            <TextLineField
              label="Shipping Address:"
              name="shippingAddress"
              register={register}
              error={errors.shippingAddress}
            />

            <TextLineField
              label="Project Notes:"
              name="projectNotes"
              register={register}
              error={errors.projectNotes}
            />
          </div>

          <div className="mb-[8px] mt-[40px] h-[2px] border-t-2 border-kiln-ink" />

          <div className="mb-4 ml-auto w-[170px] text-[15px] font-medium uppercase leading-none">
            <div className="grid grid-cols-[88px_82px] pb-1">
              <span className="text-right">Subtotal:</span>
              <span className="text-right">[{formatCurrency(totals.subtotal)}]</span>
            </div>

            <div className="grid grid-cols-[88px_82px] pb-1">
              <span className="text-right">Shipping:</span>
              <span className="text-right">[{formatCurrency(totals.shipping)}]</span>
            </div>

            <div className="grid grid-cols-[88px_82px] pb-1">
              <span className="text-right">Grand Total:</span>
              <span className="text-right">[{formatCurrency(totals.grandTotal)}]</span>
            </div>
          </div>

          <fieldset className="mb-3">
            <legend className="mb-2 inline-block rounded-[3px] border-2 border-kiln-ink bg-kiln-paperDark px-2 py-[3px] text-[14px] font-medium uppercase leading-none">
              Select Payment Method:
            </legend>

            <div className="mb-3 flex items-center justify-between">
              <PaymentOption
                label="Credit/Debit Card"
                value="credit-card"
                selectedMethod={selectedPaymentMethod}
                register={register}
              />

              <PaymentOption
                label="PayPal"
                value="paypal"
                selectedMethod={selectedPaymentMethod}
                register={register}
              />
            </div>

            {selectedPaymentMethod === 'credit-card' && (
              <div className="mb-3 rounded-[6px] border-2 border-kiln-ink bg-kiln-paperDark px-3 py-2">
                <div className="mb-1 flex items-center gap-2">
                  <PaymentOption
                    label=""
                    value="credit-card"
                    selectedMethod={selectedPaymentMethod}
                    register={register}
                  />

                  <span className="relative block h-[25px] w-[42px] shrink-0">
                    <Image
                      src="/images/payment/visa-icon.png"
                      alt=""
                      fill
                      sizes="42px"
                      className="object-contain"
                    />
                  </span>

                  <span className="relative block h-[26px] w-[42px] shrink-0">
                    <Image
                      src="/images/payment/mastercard-icon.png"
                      alt=""
                      fill
                      sizes="42px"
                      className="object-contain"
                    />
                  </span>
                </div>

                <TextBoxField
                  label="Card Number"
                  name="cardNumber"
                  register={register}
                  error={errors.cardNumber}
                  inputMode="numeric"
                  placeholder="1234 4566 7723 8990"
                />

                <div className="mt-2 grid grid-cols-2 gap-3">
                  <TextBoxField
                    label=""
                    name="cardExpiry"
                    register={register}
                    error={errors.cardExpiry}
                    placeholder="Expiration /"
                  />

                  <TextBoxField
                    label=""
                    name="cardCvc"
                    register={register}
                    error={errors.cardCvc}
                    placeholder="CVV"
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-[10px]">
              <LargePaymentCard
                label="Apple Pay"
                value="apple-pay"
                selectedMethod={selectedPaymentMethod}
                register={register}
              />

              <LargePaymentCard
                label="Bank Transfer"
                value="bank-transfer"
                selectedMethod={selectedPaymentMethod}
                register={register}
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-3 h-[38px] w-full rounded-[6px] border-2 border-kiln-ink bg-[#3f4f7c] px-3 text-[19px] font-medium uppercase leading-none text-kiln-paper"
          >
            Place Secure Order
          </button>

          {isSubmitSuccessful && (
            <p className="mt-2 text-sm font-medium text-emerald-800">Order data is valid.</p>
          )}
        </form>
      )}
    </section>
  )
}
