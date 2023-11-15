import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {appSlice} from "./features/app.ts";
import {dataSlice} from "./features/data.ts";

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        data: dataSlice.reducer
    },
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
