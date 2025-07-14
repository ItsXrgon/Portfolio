import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { initialApps } from "./data";
import { isGridPositionOccupied, isValidGridPosition } from "./utils";

const initialState = initialApps;

export const appsSlice = createSlice({
	name: "apps",
	initialState,
	reducers: {
		/**
		 * Relocate an app to a new grid position
		 * @param state - The state of the apps
		 * @param action - The action payload
		 */
		relocateApp(
			state,
			action: PayloadAction<{
				appId: string;
				position: number;
			}>,
		) {
			const { appId, position } = action.payload;

			if (!isValidGridPosition(position)) {
				console.warn(`Invalid grid position: ${position}`);
				return;
			}

			if (isGridPositionOccupied(state, position)) {
				console.warn(`Grid position ${position} is already occupied`);
				return;
			}

			const app = state[appId];
			if (!app) {
				console.warn(`App with ID ${appId} not found`);
				return;
			}

			app.position = position;
		},
	},
});

export const { relocateApp } = appsSlice.actions;

export default appsSlice.reducer;
