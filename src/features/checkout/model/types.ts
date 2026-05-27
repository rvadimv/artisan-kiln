export const paymentMethods = ['credit-card', 'paypal', 'apple-pay', 'bank-transfer'] as const

export type PaymentMethod = (typeof paymentMethods)[number]
