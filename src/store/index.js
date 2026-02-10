'use client'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

// 🔥 expose ให้ onload.js ใช้
if (typeof window !== 'undefined') {
  window.__STORE__ = store
}