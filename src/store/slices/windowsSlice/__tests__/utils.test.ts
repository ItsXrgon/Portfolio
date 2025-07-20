/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";

import { DesktopApp } from "@/store/types";

import { WindowsState } from "../types";
import {
	BASE_WINDOW_CONFIG,
	createWindow,
	createWindowState,
	getNextZIndex,
	getResponsiveWindowConfig,
	validateAndAdjustWindowBounds,
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

	describe("getResponsiveWindowConfig", () => {
		it("should return mobile config for small screens", () => {
			const config = getResponsiveWindowConfig(400, 600);

			expect(config.DEFAULT_SIZE.width).toBe(300); // Constrained by min size (400 * 0.3 = 120, but min is 280, so 400 - 100 = 300)
			expect(config.DEFAULT_SIZE.height).toBe(450); // 600 - 150
			expect(config.MIN_SIZE.width).toBe(120); // 400 * 0.3
			expect(config.MIN_SIZE.height).toBe(180); // 600 * 0.3
		});

		it("should return tablet config for medium screens", () => {
			const config = getResponsiveWindowConfig(700, 800);

			expect(config.DEFAULT_SIZE.width).toBe(560); // 700 * 0.8
			expect(config.DEFAULT_SIZE.height).toBe(500); // min(800 * 0.7, 500)
			expect(config.MIN_SIZE.width).toBe(210); // 700 * 0.3
			expect(config.MIN_SIZE.height).toBe(240); // 800 * 0.3
		});

		it("should return desktop config for large screens", () => {
			const config = getResponsiveWindowConfig(1200, 900);

			expect(config.DEFAULT_SIZE.width).toBe(800); // Large desktop breakpoint (1200 > 1024, so uses lg config)
			expect(config.DEFAULT_SIZE.height).toBe(700);
			expect(config.MIN_SIZE.width).toBe(360); // 1200 * 0.3
			expect(config.MIN_SIZE.height).toBe(270); // 900 * 0.3
		});

		it("should return large desktop config for very large screens", () => {
			const config = getResponsiveWindowConfig(1600, 1000);

			expect(config.DEFAULT_SIZE.width).toBe(1000); // Extra large breakpoint (1600 > 1440, so uses xl config)
			expect(config.DEFAULT_SIZE.height).toBe(800);
			expect(config.MIN_SIZE.width).toBe(480); // 1600 * 0.3
			expect(config.MIN_SIZE.height).toBe(300); // 1000 * 0.3
		});

		it("should return extra large config for huge screens", () => {
			const config = getResponsiveWindowConfig(2000, 1200);

			expect(config.DEFAULT_SIZE.width).toBe(1000);
			expect(config.DEFAULT_SIZE.height).toBe(800);
			expect(config.MIN_SIZE.width).toBe(600); // 2000 * 0.3
			expect(config.MIN_SIZE.height).toBe(360); // 1200 * 0.3
		});

		it("should ensure default size doesn't exceed screen bounds", () => {
			const config = getResponsiveWindowConfig(500, 400);

			expect(config.DEFAULT_SIZE.width).toBeLessThanOrEqual(400); // 500 - 100
			expect(config.DEFAULT_SIZE.height).toBeLessThanOrEqual(250); // 400 - 150
		});

		it("should ensure minimum size is reasonable", () => {
			const config = getResponsiveWindowConfig(1000, 800);

			expect(config.MIN_SIZE.width).toBeLessThanOrEqual(300); // 1000 * 0.3
			expect(config.MIN_SIZE.height).toBeLessThanOrEqual(240); // 800 * 0.3
		});
	});

	describe("validateAndAdjustWindowBounds", () => {
		it("should not adjust window that fits within screen", () => {
			const position = { x: 100, y: 100 };
			const size = { width: 400, height: 300 };
			const screenWidth = 1000;
			const screenHeight = 800;

			const result = validateAndAdjustWindowBounds(
				position,
				size,
				screenWidth,
				screenHeight,
			);

			expect(result.position).toEqual(position);
			expect(result.size).toEqual(size);
		});

		it("should adjust window that goes off-screen horizontally", () => {
			const position = { x: 800, y: 100 };
			const size = { width: 400, height: 300 };
			const screenWidth = 1000;
			const screenHeight = 800;

			const result = validateAndAdjustWindowBounds(
				position,
				size,
				screenWidth,
				screenHeight,
			);

			expect(result.position.x).toBe(600); // 1000 - 400
			expect(result.position.y).toBe(100);
			expect(result.size).toEqual(size);
		});

		it("should adjust window that goes off-screen vertically", () => {
			const position = { x: 100, y: 600 };
			const size = { width: 400, height: 300 };
			const screenWidth = 1000;
			const screenHeight = 800;

			const result = validateAndAdjustWindowBounds(
				position,
				size,
				screenWidth,
				screenHeight,
			);

			expect(result.position.x).toBe(100);
			expect(result.position.y).toBe(500); // 800 - 300
			expect(result.size).toEqual(size);
		});

		it("should adjust window that exceeds screen width", () => {
			const position = { x: 100, y: 100 };
			const size = { width: 1200, height: 300 };
			const screenWidth = 1000;
			const screenHeight = 800;

			const result = validateAndAdjustWindowBounds(
				position,
				size,
				screenWidth,
				screenHeight,
			);

			expect(result.size.width).toBe(950); // 1000 - 50
			expect(result.position.x).toBe(25);
			expect(result.size.height).toBe(300);
		});

		it("should adjust window that exceeds screen height", () => {
			const position = { x: 100, y: 100 };
			const size = { width: 400, height: 900 };
			const screenWidth = 1000;
			const screenHeight = 800;

			const result = validateAndAdjustWindowBounds(
				position,
				size,
				screenWidth,
				screenHeight,
			);

			expect(result.size.width).toBe(400);
			expect(result.size.height).toBe(700); // 800 - 100
			expect(result.position.y).toBe(25);
		});

		it("should handle window that exceeds both dimensions", () => {
			const position = { x: 100, y: 100 };
			const size = { width: 1200, height: 900 };
			const screenWidth = 1000;
			const screenHeight = 800;

			const result = validateAndAdjustWindowBounds(
				position,
				size,
				screenWidth,
				screenHeight,
			);

			expect(result.size.width).toBe(950); // 1000 - 50
			expect(result.size.height).toBe(700); // 800 - 100
			expect(result.position.x).toBe(25);
			expect(result.position.y).toBe(25);
		});
	});

	describe("createWindowState", () => {
		it("should create responsive window state with screen dimensions", () => {
			const result = createWindowState(1000, 800);

			expect(result.isMaximized).toBe(false);
			expect(result.isMinimized).toBe(false);
			expect(result.zIndex).toBe(0);
			expect(result.position).toEqual(
				BASE_WINDOW_CONFIG.DEFAULT_POSITION,
			);
			// Size should be responsive based on screen dimensions
			expect(result.size.width).toBe(600); // Desktop default
			expect(result.size.height).toBe(600);
		});

		it("should use responsive config for mobile screens", () => {
			const result = createWindowState(400, 600);

			expect(result.size.width).toBe(300); // Constrained by responsive logic
			expect(result.size.height).toBe(450); // 600 - 150
		});
	});

	describe("createWindow", () => {
		const mockApp: DesktopApp = {
			id: "test-app",
			name: "Test App",
			icon: "github",
			position: 0,
			parentDirectory: "/",
		};

		it("should create responsive window with screen dimensions", () => {
			const result = createWindow(mockApp, 1000, 800);

			expect(result.id).toBe("test-app");
			expect(result.name).toBe("Test App");
			expect(result.icon).toBe("github");
			expect(result.isMaximized).toBe(false);
			expect(result.isMinimized).toBe(false);
			expect(result.zIndex).toBe(0);
			expect(result.position).toEqual(
				BASE_WINDOW_CONFIG.DEFAULT_POSITION,
			);
			expect(result.size.width).toBe(600); // Desktop default
			expect(result.size.height).toBe(600);
		});

		it("should preserve app properties", () => {
			const customApp: DesktopApp = {
				id: "custom-app",
				name: "Custom App",
				icon: "settings",
				position: 5,
				parentDirectory: "/custom",
			};

			const result = createWindow(customApp, 1000, 800);

			expect(result.id).toBe("custom-app");
			expect(result.name).toBe("Custom App");
			expect(result.icon).toBe("settings");
		});

		it("should create mobile-responsive window", () => {
			const result = createWindow(mockApp, 400, 600);

			expect(result.size.width).toBe(300); // Constrained by responsive logic
			expect(result.size.height).toBe(450); // 600 - 150
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
