'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: '2bb7932bfd5af18c8e8b90d0a0530ca2e65fc9401002dff074371e356741b7e4703438116f4cab8f28982e37397c798d812846be5670d95a4af7cd5ecffadc70',
    dynamicurl: null
}

const dynamicurlSlice = createSlice({
    name: 'dynamicurl',
    initialState,
    reducers: {
        setDynamicUrl(state, action) {
            state.dynamicurl = { 
                ...state.dynamicurl,
                ...action.payload 
            }
        }
    }
})

export const { setDynamicUrl } = dynamicurlSlice.actions;
export default dynamicurlSlice.reducer;