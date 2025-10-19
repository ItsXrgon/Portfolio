import {
	Action,
	ThunkAction,
	combineReducers,
	configureStore,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appsReducer from "./slices/appsSlice";
import taskbarReducer from "./slices/taskbarSlice";
import windowsReducer from "./slices/windowsSlice";

const reducers = combineReducers({
	apps: appsReducer,
	taskbar: taskbarReducer,
	windows: windowsReducer,
});

const persistConfig = {
	key: "root",
	storage,
	version: 2,
	serialize: true,
	debounce: 1000,
	// Disable migrations
	migrate: () => Promise.resolve(undefined),
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
			},
			immutableCheck: false,
		}),
	devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

/**
 * The hook to use the app dispatch
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * The hook to use the app selector
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Purge the store
 */
export const purgeStore = () => {
	persistor.purge();
};

/**
 * Flush the store
 */
export const flushStore = () => {
	persistor.flush();
};

export { store as default };
