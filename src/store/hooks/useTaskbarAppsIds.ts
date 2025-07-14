import { selectTaskbarAppsIds } from "../slices";
import { useAppSelector } from "../store";

/**
 * Hook to select all taskbar app IDs as an array
 *
 * @returns An array of all taskbar app IDs (strings)
 */
export function useTaskbarAppsIds() {
	return useAppSelector(selectTaskbarAppsIds);
}
