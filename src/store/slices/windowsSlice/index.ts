export type { WindowsState } from "./types";

export {
	closeWindow,
	maximizeWindow,
	minimizeAllWindows,
	minimizeWindow,
	openWindow,
	pushToFront,
	relocateWindow,
	unMaximizeWindow,
	unMinimizeWindow,
	default as windowsReducer,
} from "./slice";

export {
	selectVisibleWindowsIds,
	selectWindow,
	selectWindows,
	selectWindowsIds,
} from "./selectors";

export { default } from "./slice";
