import { AppIcons } from "@/components/AppIcon";

/**
 * A desktop app
 */
export interface DesktopApp {
	/**
	 * The ID of the app
	 */
	id: string;
	/**
	 * The name of the app
	 */
	name: string;
	/**
	 * The icon of the app
	 */
	icon: AppIcons;
	/**
	 * The position of the app on the desktop
	 */
	position: number;
}

/**
 * A taskbar app
 */
export interface TaskbarApp {
	/**
	 * The ID of the app
	 */
	id: string;
	/**
	 * The name of the app
	 */
	name: string;
	/**
	 * The icon of the app
	 */
	icon: AppIcons;
	/**
	 * Whether the app is pinned to the taskbar
	 */
	pinned: boolean;
}

/**
 * A desktop window
 */
export interface DesktopWindow {
	/**
	 * The ID of the app
	 */
	id: string;
	/**
	 * The name of the app
	 */
	name: string;
	/**
	 * The icon of the app
	 */
	icon: AppIcons;
	/**
	 * Whether the window is maximized
	 */
	isMaximized: boolean;
	/**
	 * Whether the window is minimized
	 */
	isMinimized: boolean;
	/**
	 * The z-index of the window
	 */
	zIndex: number;
	/**
	 * The position of the window
	 */
	position: {
		/**
		 * The x-coordinate of the window
		 */
		x: number;
		/**
		 * The y-coordinate of the window
		 */
		y: number;
	};
	/**
	 * The size of the window
	 */
	size: {
		/**
		 * The width of the window
		 */
		width: number;
		/**
		 * The height of the window
		 */
		height: number;
	};
}
