'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    parameters: {

    }
}

const paramsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        setParams(state, action) {
            state.parameters = { 
                ...state,
                ...action.payload
            
            }
        }
    }
})

export const { setParams } = paramsSlice.actions;
export default paramsSlice.reducer;