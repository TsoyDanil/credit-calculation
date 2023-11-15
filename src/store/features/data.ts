import {createSlice} from "@reduxjs/toolkit";


interface IDataState {

}

const initialState: IDataState = {

}

export const dataSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setData: (state) => {
            console.log(state)
        }
    }
})

export const {setData} = dataSlice.actions