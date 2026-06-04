import { z } from 'zod'

const paymentMethodSchema = z.enum(['credit-card', 'paypal', 'apple-pay', 'bank-transfer'])

const isValidCardNumber = (value: string) => {
  const digits = value.replace(/\s/g, '')

  return /^\d{13,19}$/.test(digits)
}

export const checkoutSchema = z
  .object({
    customerName: z.string().trim().min(1, 'Enter customer name'),

    phone: z
      .string()
      .trim()
      .regex(/^\+?[0-9\s()-]{7,20}$/, 'Enter a valid phone'),

    email: z.string().trim().email('Enter a valid email'),

    shippingAddress: z.string().trim().min(1, 'Enter shipping address'),

    projectNotes: z.string().trim().optional(),

    paymentMethod: paymentMethodSchema,

    cardNumber: z.string().trim().optional(),
    cardExpiry: z.string().trim().optional(),
    cardCvc: z.string().trim().optional(),
  })
  .superRefine((values, context) => {
    if (values.paymentMethod !== 'credit-card') {
      return
    }

    if (!values.cardNumber || !isValidCardNumber(values.cardNumber)) {
      context.addIssue({
        code: 'custom',
        path: ['cardNumber'],
        message: 'Enter a valid card number',
      })
    }

    if (!values.cardExpiry || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(values.cardExpiry)) {
      context.addIssue({
        code: 'custom',
        path: ['cardExpiry'],
        message: 'Use MM/YY',
      })
    }

    if (!values.cardCvc || !/^\d{3,4}$/.test(values.cardCvc)) {
      context.addIssue({
        code: 'custom',
        path: ['cardCvc'],
        message: 'Enter CVC',
      })
    }
  })

export type CheckoutFormValues = z.infer<typeof checkoutSchema>
