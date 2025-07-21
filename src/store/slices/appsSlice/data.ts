import { DesktopApp } from "@/store/types";

/**
 * The initial apps loaded into the desktop
 * Positions are now grid cell indices (0-based)
 * Apps are arranged vertically: first column fills top to bottom, then second column, etc.
 */
export const initialApps: Record<string, DesktopApp> = {
	"0": {
		id: "0",
		name: "Terminal",
		icon: "terminal",
		position: 0, // First column, first row (col 0, row 0)
	},
	"1": {
		id: "1",
		name: "Github",
		icon: "github",
		position: 1, // First column, second row (col 0, row 1)
	},
	"2": {
		id: "2",
		name: "Settings",
		icon: "settings",
		position: 2, // First column, third row (col 0, row 2)
	},
	"3": {
		id: "3",
		name: "Curaflow",
		icon: "curaflow",
		position: 3, // First column, fourth row (col 0, row 3)
	},
	"4": {
		id: "4",
		name: "Multi Unit Converter",
		icon: "multi_unit_converter",
		position: 4, // First column, fifth row (col 0, row 4)
	},
	"5": {
		id: "5",
		name: "Xrbot - Discord Bot",
		icon: "xrbot",
		position: 5, // First column, sixth row (col 0, row 5)
	},
	"7": {
		id: "7",
		name: "Haskell Chess Game",
		icon: "haskell_chess_game",
		position: 6, // First column, seventh row (col 0, row 6)
	},
	"8": {
		id: "8",
		name: "Virtual Automaton",
		icon: "virtual_automaton",
		position: 7, // First column, eighth row (col 0, row 7)
	},
} as const;
