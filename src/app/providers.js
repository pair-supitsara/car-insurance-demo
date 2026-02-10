'use client'
import { Provider } from 'react-redux'
import { store } from '../store/index.js'
import { useEffect } from 'react'

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>
}