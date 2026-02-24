'use client'
import { combineReducers } from '@reduxjs/toolkit'
import customer from '@/store/slices/customer.slice'
import ui from '@/store/slices/ui.slice'
import dynamicurl from '@/store/slices/dynamicurl.slice'

const rootReducer = combineReducers({
  customer,
  ui,
  dynamicurl
})

export default rootReducer