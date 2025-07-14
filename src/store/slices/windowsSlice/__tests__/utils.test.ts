/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";

import { DesktopApp } from "@/store/types";

import { WindowsState } from "../types";
import {
	WINDOW_CONFIG,
	createWindow,
	createWindowState,
	getNextZIndex,
	validatePosition,
} from "../utils";

describe("Windows Utils", () => {
	describe("validatePosition", () => {
		it("should validate positive coordinates", () => {
			const position = { x: 100, y: 200 };
			const result = validatePosition(position);

			expect(result).toBe(true);
		});

		it("should validate zero coordinates", () => {
			const position = { x: 0, y: 0 };
			const result = validatePosition(position);

			expect(result).toBe(true);
		});

		it("should reject negative x coordinate", () => {
			const position = { x: -100, y: 200 };
			const result = validatePosition(position);

			expect(result).toBe(false);
		});

		it("should reject negative y coordinate", () => {
			const position = { x: 100, y: -200 };
			const result = validatePosition(position);

			expect(result).toBe(false);
		});

		it("should reject both negative coordinates", () => {
			const position = { x: -100, y: -200 };
			const result = validatePosition(position);

			expect(result).toBe(false);
		});
	});

	describe("createWindowState", () => {
		it("should create default window state", () => {
			const result = createWindowState();

			expect(result).toEqual({
				isMaximized: false,
				isMinimized: false,
				zIndex: 0,
				position: WINDOW_CONFIG.DEFAULT_POSITION,
				size: WINDOW_CONFIG.DEFAULT_SIZE,
			});
		});

		it("should use correct default values from config", () => {
			const result = createWindowState();

			expect(result.position).toBe(WINDOW_CONFIG.DEFAULT_POSITION);
			expect(result.size).toBe(WINDOW_CONFIG.DEFAULT_SIZE);
		});
	});

	describe("createWindow", () => {
		it("should create window from desktop app", () => {
			const mockApp: DesktopApp = {
				id: "test-app",
				name: "Test App",
				icon: "github",
				position: 0,
				parentDirectory: "/",
			};

			const result = createWindow(mockApp);

			expect(result).toEqual({
				id: "test-app",
				name: "Test App",
				icon: "github",
				isMaximized: false,
				isMinimized: false,
				zIndex: 0,
				position: WINDOW_CONFIG.DEFAULT_POSITION,
				size: WINDOW_CONFIG.DEFAULT_SIZE,
			});
		});

		it("should preserve app properties", () => {
			const mockApp: DesktopApp = {
				id: "custom-app",
				name: "Custom App",
				icon: "settings",
				position: 5,
				parentDirectory: "/custom",
			};

			const result = createWindow(mockApp);

			expect(result.id).toBe("custom-app");
			expect(result.name).toBe("Custom App");
			expect(result.icon).toBe("settings");
		});

		it("should include default window state properties", () => {
			const mockApp: DesktopApp = {
				id: "test-app",
				name: "Test App",
				icon: "terminal",
				position: 0,
				parentDirectory: "/",
			};

			const result = createWindow(mockApp);

			expect(result.isMaximized).toBe(false);
			expect(result.isMinimized).toBe(false);
			expect(result.zIndex).toBe(0);
			expect(result.position).toEqual(WINDOW_CONFIG.DEFAULT_POSITION);
			expect(result.size).toEqual(WINDOW_CONFIG.DEFAULT_SIZE);
		});
	});

	describe("getNextZIndex", () => {
		it("should return 1 for empty state", () => {
			const emptyState: WindowsState = {};
			const result = getNextZIndex(emptyState);

			expect(result).toBe(1);
		});

		it("should return max z-index + 1 for single window", () => {
			const state: WindowsState = {
				window1: {
					id: "window1",
					name: "Window 1",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					zIndex: 5,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const result = getNextZIndex(state);

			expect(result).toBe(6);
		});

		it("should return max z-index + 1 for multiple windows", () => {
			const state: WindowsState = {
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
					isMaximized: false,
					isMinimized: false,
					zIndex: 10,
					position: { x: 200, y: 200 },
					size: { width: 800, height: 600 },
				},
				window3: {
					id: "window3",
					name: "Window 3",
					icon: "terminal",
					isMaximized: false,
					isMinimized: false,
					zIndex: 3,
					position: { x: 300, y: 300 },
					size: { width: 800, height: 600 },
				},
			};

			const result = getNextZIndex(state);

			expect(result).toBe(11);
		});

		it("should handle windows with undefined z-index", () => {
			const state: WindowsState = {
				window1: {
					id: "window1",
					name: "Window 1",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					// @ts-expect-error - Simulating undefined z-index
					zIndex: undefined,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
				window2: {
					id: "window2",
					name: "Window 2",
					icon: "settings",
					isMaximized: false,
					isMinimized: false,
					zIndex: 5,
					position: { x: 200, y: 200 },
					size: { width: 800, height: 600 },
				},
			};

			const result = getNextZIndex(state);

			expect(result).toBe(6);
		});

		it("should handle all windows with undefined z-index", () => {
			const state: WindowsState = {
				window1: {
					id: "window1",
					name: "Window 1",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					// @ts-expect-error - Simulating undefined z-index
					zIndex: undefined,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
				window2: {
					id: "window2",
					name: "Window 2",
					icon: "settings",
					isMaximized: false,
					isMinimized: false,
					// @ts-expect-error - Simulating undefined z-index
					zIndex: undefined,
					position: { x: 200, y: 200 },
					size: { width: 800, height: 600 },
				},
			};

			const result = getNextZIndex(state);

			expect(result).toBe(1);
		});
	});
});
