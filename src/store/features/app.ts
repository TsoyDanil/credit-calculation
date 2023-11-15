import {createSlice} from "@reduxjs/toolkit";

interface IAppState {
    showModal: boolean
}

const initialState: IAppState = {
    showModal: false
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleShowModal: (state) => {
            state.showModal = !state.showModal
        }
    }
})

export const {toggleShowModal} = appSlice.actions