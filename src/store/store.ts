import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appsReducer from "./appsSlice";

export const store = configureStore({
	reducer: {
		apps: appsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
