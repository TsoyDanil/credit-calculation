import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TCarData} from "../../types/carData.ts";


interface IDataState {
    bargainPoint: null | string,
    carType: null | string,
    carData: TCarData,
    withIncome: boolean,
    carCost: null | number,
    firstPayment: null | number,
    loanPeriod: null | number
}

const initialState: IDataState = {
    bargainPoint: null,
    carType: null,
    carData: {
        carMark: null,
        carModel: null,
        releaseYear: null
    },
    withIncome: false,
    carCost: null,
    firstPayment: null,
    loanPeriod: null
}

export const dataSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setBargainPoint: (state, action: PayloadAction<string>) => {
            state.bargainPoint = action.payload
        },
        setCarType: (state, action: PayloadAction<string>) => {
            state.carType = action.payload
        },
        setCarOverallData: (state, action: PayloadAction<TCarData>) => {
            state.carData = action.payload
        },
        toggleWithIncome: (state) => {
            state.withIncome = !state.withIncome
        },
        setCarCost: (state, action: PayloadAction<number | null>) => {
            state.carCost = action.payload
        },
        setFirstPayment: (state, action: PayloadAction<number | null>) => {
            state.firstPayment = action.payload
        },
        setLoanPeriod: (state, action: PayloadAction<number>) => {
            state.loanPeriod = action.payload
        }
    }
})

export const {
    setCarOverallData,
    toggleWithIncome,
    setCarCost,
    setFirstPayment,
    setLoanPeriod,
    setBargainPoint,
    setCarType
} = dataSlice.actions