import { DesktopApp, DesktopWindow } from "@/store/types";

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

/**
 * The payload for opening a window with responsive sizing
 */
export interface OpenWindowPayload {
	/**
	 * The ID of the app
	 */
	appId: string;
	/**
	 * The app data
	 */
	app: DesktopApp;
	/**
	 * Screen width for responsive sizing
	 */
	screenWidth: number;
	/**
	 * Screen height for responsive sizing
	 */
	screenHeight: number;
}
