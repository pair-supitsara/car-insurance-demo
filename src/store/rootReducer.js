'use client'
import { combineReducers } from '@reduxjs/toolkit'
import customer from './slices/customer.slice'
import ui from './slices/ui.slice'

const rootReducer = combineReducers({
  customer,
  ui
})

export default rootReducer