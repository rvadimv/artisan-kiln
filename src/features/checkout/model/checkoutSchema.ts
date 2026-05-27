import { z } from 'zod'

const baseCheckoutSchema = z.object({
  customerName: z.string().min(2, 'Enter customer name'),
  phone: z.string().min(5, 'Enter phone number'),
  email: z.string().email('Enter a valid email'),
  shippingAddress: z.string().min(5, 'Enter shipping address'),
  projectNotes: z.string().optional(),
})

const creditCardCheckoutSchema = baseCheckoutSchema.extend({
  paymentMethod: z.literal('credit-card'),

  cardNumber: z
    .string()
    .min(1, 'Enter card number')
    .regex(/^\d{16}$/, 'Card number must contain 16 digits'),

  cardExpiry: z
    .string()
    .min(1, 'Enter expiration date')
    .regex(/^\d{2}\/\d{2}$/, 'Use MM/YY format'),

  cardCvc: z
    .string()
    .min(1, 'Enter CVC')
    .regex(/^\d{3,4}$/, 'CVC must contain 3 or 4 digits'),
})

const paypalCheckoutSchema = baseCheckoutSchema.extend({
  paymentMethod: z.literal('paypal'),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
})

const applePayCheckoutSchema = baseCheckoutSchema.extend({
  paymentMethod: z.literal('apple-pay'),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
})

const bankTransferCheckoutSchema = baseCheckoutSchema.extend({
  paymentMethod: z.literal('bank-transfer'),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
})

export const checkoutSchema = z.discriminatedUnion('paymentMethod', [
  creditCardCheckoutSchema,
  paypalCheckoutSchema,
  applePayCheckoutSchema,
  bankTransferCheckoutSchema,
])

export type CheckoutFormValues = z.infer<typeof checkoutSchema>
