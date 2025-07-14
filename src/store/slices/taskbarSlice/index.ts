export type { TaskbarState } from "./types";

export {
	addToTaskbar,
	pinApp,
	removeFromTaskbar,
	reorderTaskbar,
	default as taskbarReducer,
	unpinApp,
} from "./slice";

export {
	selectPinnedTaskbarItems,
	selectTaskbarApp,
	selectTaskbarApps,
	selectTaskbarAppsIds,
} from "./selectors";

export { default } from "./slice";
