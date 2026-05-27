'use client'

import { Provider } from 'react-redux'
import { store } from '@/shared/model/store'
import type { ReactNode } from 'react'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>
}
