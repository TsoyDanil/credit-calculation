import {createSlice} from "@reduxjs/toolkit";

interface IAppState {
    showModal: boolean
    isCountActive: boolean
}

const initialState: IAppState = {
    showModal: false,
    isCountActive: false
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleShowModal: (state) => {
            state.showModal = !state.showModal
        },
        toggleCountActive: (state) => {
            state.isCountActive = !state.isCountActive
        }
    }
})

export const {toggleShowModal, toggleCountActive} = appSlice.actions