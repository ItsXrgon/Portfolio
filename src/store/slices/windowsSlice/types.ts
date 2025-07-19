import { DesktopWindow } from "@/store/types";

export type WindowsState = Record<string, DesktopWindow>;

/**
 * The payload for a window action
 */
export interface WindowActionPayload {
	/**
	 * The ID of the window
	 */
	windowId: string;
}
