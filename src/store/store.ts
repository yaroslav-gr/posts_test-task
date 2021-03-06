import { configureStore } from "@reduxjs/toolkit";
import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axiosInstance from "../services/api";
import { reducer } from "./reducer";

export type RootState = ReturnType<typeof reducer>;
export type MyExtraArg = undefined;
export type MyThunkResult<R> = ThunkAction<R, RootState, MyExtraArg, Action>;
export type MyThunkDispatch = ThunkDispatch<RootState, MyExtraArg, Action>;

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosInstance
      },
    })
});
