import { selectTaskbarApps } from "../slices/taskbarSlice/selectors";
import { useAppSelector } from "../store";

/**
 * Hook to select all taskbar apps as an array
 *
 * @returns An array of all taskbar app objects
 */
export function useTaskbarApps() {
	return Object.values(useAppSelector(selectTaskbarApps));
}
