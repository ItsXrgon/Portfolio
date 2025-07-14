import { selectAppsIds } from "../slices/appsSlice/selectors";
import { useAppSelector } from "../store";

/**
 * Hook to select all desktop app IDs as an array
 *
 * @returns An array of all desktop app IDs (strings)
 */
export function useAppsIds() {
	return useAppSelector(selectAppsIds);
}
