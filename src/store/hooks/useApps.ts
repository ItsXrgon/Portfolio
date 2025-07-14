import { selectApps } from "../slices";
import { useAppSelector } from "../store";

/**
 * Hook to select all desktop apps as an array
 *
 * @returns An array of all desktop app objects
 */
export function useApps() {
	return Object.values(useAppSelector(selectApps));
}
