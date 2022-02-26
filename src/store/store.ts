import { Action, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import axiosInstance from "../services/api";
import { reducer } from "./reducer";

export type RootState = ReturnType<typeof reducer>;
export type MyExtraArg = undefined;
export type MyThunkResult<R> = ThunkAction<R, RootState, MyExtraArg, Action>;
export type MyThunkDispatch = ThunkDispatch<RootState, MyExtraArg, Action>;

export const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(axiosInstance)),
  )
);
