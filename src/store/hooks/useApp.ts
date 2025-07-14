import { selectApp } from "../slices/appsSlice/selectors";
import { useAppSelector } from "../store";

/**
 * Hook to select a specific desktop app by its ID
 *
 * @param id - The unique identifier of the app to retrieve
 * @returns The desktop app object if found, or undefined if the app doesn't exist
 */
export function useApp(id: string) {
	return useAppSelector(selectApp(id));
}
