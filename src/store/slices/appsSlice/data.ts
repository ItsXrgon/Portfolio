import { DesktopApp } from "@/store/types";

import { GRID_CONFIG } from "./utils";

/**
 * The initial apps loaded into the desktop
 */
export const initialApps: Record<string, DesktopApp> = {
	"0": {
		id: "0",
		name: "Terminal",
		icon: "terminal",
		position: GRID_CONFIG.COLUMN_COUNT * 0,
		parentDirectory: "/",
	},
	"1": {
		id: "1",
		name: "Github",
		icon: "github",
		position: GRID_CONFIG.COLUMN_COUNT * 1,
		parentDirectory: "/",
	},
	"2": {
		id: "2",
		name: "Settings",
		icon: "settings",
		position: GRID_CONFIG.COLUMN_COUNT * 2,
		parentDirectory: "/",
	},
	"3": {
		id: "3",
		name: "Curaflow",
		icon: "curaflow",
		position: GRID_CONFIG.COLUMN_COUNT * 3,
		parentDirectory: "/",
	},
	"4": {
		id: "4",
		name: "Multi Unit Converter",
		icon: "multi_unit_converter",
		position: GRID_CONFIG.COLUMN_COUNT * 4,
		parentDirectory: "/",
	},
	"5": {
		id: "5",
		name: "Xrbot - Discord Bot",
		icon: "xrbot",
		position: GRID_CONFIG.COLUMN_COUNT * 5,
		parentDirectory: "/",
	},
	"6": {
		id: "6",
		name: "User purge - Discord Bot",
		icon: "user_purge",
		position: GRID_CONFIG.COLUMN_COUNT * 6,
		parentDirectory: "/",
	},
	"7": {
		id: "7",
		name: "Haskell Chess Game",
		icon: "haskell_chess_game",
		position: 1,
		parentDirectory: "/",
	},
	"8": {
		id: "8",
		name: "Check Calculator",
		icon: "check_calculator",
		position: 1 + GRID_CONFIG.COLUMN_COUNT * 1,
		parentDirectory: "/",
	},
};
