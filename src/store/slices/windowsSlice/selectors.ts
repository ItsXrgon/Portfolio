import { createSelector } from "@reduxjs/toolkit";

import { WindowsState } from "./types";

export const selectWindows = (state: { windows: WindowsState }) =>
	state.windows;

export const selectWindowsIds = createSelector(
	[selectWindows],
	(windows) => Object.keys(windows),
	{
		memoizeOptions: {
			resultEqualityCheck: (a: string[], b: string[]) => {
				if (a.length !== b.length) return false;
				return a.every((id: string, index: number) => id === b[index]);
			},
		},
	},
);

export const selectWindow = (id: string) =>
	createSelector([selectWindows], (windows) => windows[id]);

export const selectVisibleWindowsIds = createSelector(
	[selectWindows],
	(windows) =>
		Object.values(windows)
			.filter((window) => !window.isMinimized)
			.map((window) => window.id),
);
