import { selectTaskbarApp } from "../slices";
import { useAppSelector } from "../store";

/**
 * Hook to select a specific taskbar app by its ID
 *
 * @param id - The unique identifier of the taskbar app to retrieve
 * @returns The taskbar app object if found, or undefined if the app isn't in the taskbar
 */
export function useTaskbarApp(id: string) {
	return useAppSelector(selectTaskbarApp(id));
}
