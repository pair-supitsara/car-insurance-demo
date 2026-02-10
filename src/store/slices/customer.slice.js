'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    personal: {
        nameth: null,
    },

    carinfo: {
        caryear: null,
        carband: null,
        cargroupmodel: null,
        carmodel: null,
        mileage: null,
        customertypecar: null,
        iscctv: null,
        noregister: null,
        registertype: null,
        carprovince: null,
        carusedarea: null,
        carusedtime: null,
        expdate: null
    },

    insurance: {
        policytype: null,
        insurgarage: null,
        insurebefore: null,
        clainproblem: null,
        amountcustusedcar: null,
        specifydriver: null,
        beneficiaryage: null,
        registergender: null,
        haveclaim: null,
        insurwarninginfo: null,
        havecreditcard: null
    },

    prb: {
        includeCMI: null,
    },

    options: {
        comparetype: null,
        suminsure: null,
        basesuminsure: null,
        tickcalculateinsurance: null,
        tickcalculatenewpackage: null
    }
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setinfo(state, action) {
            state.personal = {
                ...state.personal,
                ...action.payload
            }
        },
        setcarinfo(state, action) {
            state.carinfo = {
                ...state.carinfo,
                ...action.payload
            }
        }
    }
})

export const { setinfo, setcarinfo } = customerSlice.actions;
export default customerSlice.reducer;
