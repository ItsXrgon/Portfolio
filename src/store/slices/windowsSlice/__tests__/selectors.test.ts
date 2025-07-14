/// <reference types="bun-types" />
import { beforeEach, describe, expect, it } from "bun:test";

import { selectWindow, selectWindows, selectWindowsIds } from "../selectors";
import { WindowsState } from "../types";

describe("Windows Slice Selectors", () => {
	let state: {
		windows: WindowsState;
	};

	beforeEach(() => {
		state = {
			windows: {
				window1: {
					id: "window1",
					name: "Window 1",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					zIndex: 1,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
				window2: {
					id: "window2",
					name: "Window 2",
					icon: "settings",
					isMaximized: true,
					isMinimized: false,
					zIndex: 2,
					position: { x: 200, y: 200 },
					size: { width: 1000, height: 700 },
				},
				window3: {
					id: "window3",
					name: "Window 3",
					icon: "terminal",
					isMaximized: false,
					isMinimized: true,
					zIndex: 3,
					position: { x: 300, y: 300 },
					size: { width: 600, height: 400 },
				},
			},
		};
	});

	describe("selectWindows", () => {
		it("should select all windows", () => {
			const result = selectWindows(state);
			expect(result).toEqual(state.windows);
		});

		it("should return empty object for empty state", () => {
			const emptyState = { windows: {} };
			const result = selectWindows(emptyState);
			expect(result).toEqual({});
		});
	});

	describe("selectWindowsIds", () => {
		it("should select window IDs", () => {
			const result = selectWindowsIds(state);
			expect(result).toEqual(["window1", "window2", "window3"]);
		});

		it("should return empty array for empty state", () => {
			const emptyState = { windows: {} };
			const result = selectWindowsIds(emptyState);
			expect(result).toEqual([]);
		});

		it("should maintain order of window IDs", () => {
			const result = selectWindowsIds(state);
			// The order should match the order in the state object
			expect(result[0]).toBe("window1");
			expect(result[1]).toBe("window2");
			expect(result[2]).toBe("window3");
		});
	});

	describe("selectWindow", () => {
		it("should select window by ID", () => {
			const windowId = "window1";
			const selector = selectWindow(windowId);
			const result = selector(state);

			expect(result).toEqual(state.windows[windowId]);
		});

		it("should return undefined for non-existent window", () => {
			const nonExistentWindowId = "non-existent";
			const selector = selectWindow(nonExistentWindowId);
			const result = selector(state);

			expect(result).toBeUndefined();
		});

		it("should return undefined for empty state", () => {
			const emptyState = { windows: {} };
			const selector = selectWindow("window1");
			const result = selector(emptyState);

			expect(result).toBeUndefined();
		});

		it("should select maximized window", () => {
			const windowId = "window2";
			const selector = selectWindow(windowId);
			const result = selector(state);

			expect(result).toBeDefined();
			expect(result!.isMaximized).toBe(true);
			expect(result!.isMinimized).toBe(false);
		});

		it("should select minimized window", () => {
			const windowId = "window3";
			const selector = selectWindow(windowId);
			const result = selector(state);

			expect(result).toBeDefined();
			expect(result!.isMaximized).toBe(false);
			expect(result!.isMinimized).toBe(true);
		});
	});
});
