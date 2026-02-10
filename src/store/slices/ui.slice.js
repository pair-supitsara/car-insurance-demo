'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    offcanvas: {
        open: false,
        name: null
    },
    panelstack: {
        panels: ['mainPanel']
    },
    loading: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openOffcanvas(state, action) {
            console.log("openOffcanvas")

            if (state.offcanvas.name !== action.payload.name) {
                state.offcanvas.open = true
                state.offcanvas.name = action.payload.name
            } else {
                state.offcanvas.open = false
                state.offcanvas.name = null
            }
        },
        closeOffcanvas(state, action) {
            console.log("closeOffcanvas")
            state.offcanvas.open = false
            state.offcanvas.name = null
            
        },
        fnShowPanels(state, action) {
            state.panelstack.panels.push(action.payload.name)
        },
        fnHidePanels(state, action) {
            let array = state.panelstack.panels
            let targetPanel = action.payload.name
            state.panelstack.panels = array.filter((item) => item !== targetPanel)
        }
    }
})

export const { openOffcanvas, closeOffcanvas, fnShowPanels, fnHidePanels } = uiSlice.actions;
export default uiSlice.reducer;