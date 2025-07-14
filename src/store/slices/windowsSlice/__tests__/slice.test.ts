/// <reference types="bun-types" />
import { beforeEach, describe, expect, it, spyOn } from "bun:test";

import { DesktopApp } from "@/store/types";

import windowsSlice, {
	closeWindow,
	maximizeWindow,
	minimizeAllWindows,
	minimizeWindow,
	openWindow,
	pushToFront,
	relocateWindow,
	unMaximizeWindow,
	unMinimizeWindow,
} from "../slice";
import { WindowsState } from "../types";

describe("Windows Slice", () => {
	let initialState: WindowsState;
	let mockDesktopApp: DesktopApp;

	beforeEach(() => {
		initialState = {};
		mockDesktopApp = {
			id: "test-app",
			name: "Test App",
			icon: "github",
			position: 0,
			parentDirectory: "/",
		};
		// Mock console.warn to avoid noise in tests
		spyOn(console, "warn").mockImplementation(() => {});
	});

	describe("openWindow", () => {
		it("should open a new window", () => {
			const action = openWindow({
				appId: "test-app",
				app: mockDesktopApp,
			});

			const newState = windowsSlice(initialState, action);

			expect(newState["test-app"]).toBeDefined();
			expect(newState["test-app"]!.id).toBe("test-app");
			expect(newState["test-app"]!.name).toBe("Test App");
			expect(newState["test-app"]!.icon).toBe("github");
			expect(newState["test-app"]!.isMaximized).toBe(false);
			expect(newState["test-app"]!.isMinimized).toBe(false);
			expect(newState["test-app"]!.zIndex).toBe(1);
		});

		it("should not open window if it already exists", () => {
			const existingState: WindowsState = {
				"test-app": {
					id: "test-app",
					name: "Existing App",
					icon: "settings",
					isMaximized: false,
					isMinimized: false,
					zIndex: 1,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const action = openWindow({
				appId: "test-app",
				app: mockDesktopApp,
			});

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]).toEqual(existingState["test-app"]);
		});

		it("should assign correct z-index for multiple windows", () => {
			const existingState: WindowsState = {
				app1: {
					id: "app1",
					name: "App 1",
					icon: "terminal",
					isMaximized: false,
					isMinimized: false,
					zIndex: 5,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const action = openWindow({
				appId: "test-app",
				app: mockDesktopApp,
			});

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]!.zIndex).toBe(6);
		});
	});

	describe("closeWindow", () => {
		it("should close an existing window", () => {
			const existingState: WindowsState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					zIndex: 1,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const action = closeWindow({ windowId: "test-app" });

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]).toBeUndefined();
		});

		it("should handle closing non-existent window", () => {
			const action = closeWindow({ windowId: "non-existent" });

			const newState = windowsSlice(initialState, action);

			expect(newState).toEqual(initialState);
		});
	});

	describe("minimizeWindow", () => {
		it("should minimize an existing window", () => {
			const existingState: WindowsState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					zIndex: 1,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const action = minimizeWindow({ windowId: "test-app" });

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]!.isMinimized).toBe(true);
			expect(newState["test-app"]!.isMaximized).toBe(false);
		});

		it("should handle minimizing non-existent window", () => {
			const action = minimizeWindow({ windowId: "non-existent" });

			const newState = windowsSlice(initialState, action);

			expect(newState).toEqual(initialState);
			expect(console.warn).toHaveBeenCalledWith(
				"Window with ID non-existent not found",
			);
		});
	});

	describe("unMinimizeWindow", () => {
		it("should unminimize an existing window", () => {
			const existingState: WindowsState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					isMaximized: false,
					isMinimized: true,
					zIndex: 1,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const action = unMinimizeWindow({ windowId: "test-app" });

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]!.isMinimized).toBe(false);
			expect(newState["test-app"]!.zIndex).toBe(2);
		});

		it("should handle unminimizing non-existent window", () => {
			const action = unMinimizeWindow({ windowId: "non-existent" });

			const newState = windowsSlice(initialState, action);

			expect(newState).toEqual(initialState);
			expect(console.warn).toHaveBeenCalledWith(
				"Window with ID non-existent not found",
			);
		});
	});

	describe("maximizeWindow", () => {
		it("should maximize an existing window", () => {
			const existingState: WindowsState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					zIndex: 1,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const action = maximizeWindow({ windowId: "test-app" });

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]!.isMaximized).toBe(true);
			expect(newState["test-app"]!.isMinimized).toBe(false);
			expect(newState["test-app"]!.zIndex).toBe(2);
		});

		it("should handle maximizing non-existent window", () => {
			const action = maximizeWindow({ windowId: "non-existent" });

			const newState = windowsSlice(initialState, action);

			expect(newState).toEqual(initialState);
			expect(console.warn).toHaveBeenCalledWith(
				"Window with ID non-existent not found",
			);
		});
	});

	describe("unMaximizeWindow", () => {
		it("should unmaximize an existing window", () => {
			const existingState: WindowsState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					isMaximized: true,
					isMinimized: false,
					zIndex: 1,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const action = unMaximizeWindow({ windowId: "test-app" });

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]!.isMaximized).toBe(false);
			expect(newState["test-app"]!.zIndex).toBe(2);
		});

		it("should handle unmaximizing non-existent window", () => {
			const action = unMaximizeWindow({ windowId: "non-existent" });

			const newState = windowsSlice(initialState, action);

			expect(newState).toEqual(initialState);
			expect(console.warn).toHaveBeenCalledWith(
				"Window with ID non-existent not found",
			);
		});
	});

	describe("relocateWindow", () => {
		it("should relocate window to valid position", () => {
			const existingState: WindowsState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					zIndex: 1,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const newPosition = { x: 200, y: 300 };
			const action = relocateWindow({
				windowId: "test-app",
				position: newPosition,
			});

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]!.position).toEqual(newPosition);
			expect(newState["test-app"]!.isMaximized).toBe(false);
		});

		it("should relocate window with new size", () => {
			const existingState: WindowsState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					zIndex: 1,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const newPosition = { x: 200, y: 300 };
			const newSize = { width: 1000, height: 700 };
			const action = relocateWindow({
				windowId: "test-app",
				position: newPosition,
				size: newSize,
			});

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]!.position).toEqual(newPosition);
			expect(newState["test-app"]!.size).toEqual(newSize);
		});

		it("should handle invalid position", () => {
			const existingState: WindowsState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					zIndex: 1,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
			};

			const invalidPosition = { x: -100, y: 300 };
			const action = relocateWindow({
				windowId: "test-app",
				position: invalidPosition,
			});

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]!.position).toEqual({ x: 100, y: 100 }); // Should remain unchanged
		});

		it("should handle relocating non-existent window", () => {
			const action = relocateWindow({
				windowId: "non-existent",
				position: { x: 200, y: 300 },
			});

			const newState = windowsSlice(initialState, action);

			expect(newState).toEqual(initialState);
			expect(console.warn).toHaveBeenCalledWith(
				"Window with ID non-existent not found",
			);
		});
	});

	describe("pushToFront", () => {
		it("should push window to front", () => {
			const existingState: WindowsState = {
				app1: {
					id: "app1",
					name: "App 1",
					icon: "terminal",
					isMaximized: false,
					isMinimized: false,
					zIndex: 5,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					isMaximized: false,
					isMinimized: false,
					zIndex: 1,
					position: { x: 200, y: 200 },
					size: { width: 800, height: 600 },
				},
			};

			const action = pushToFront({ windowId: "test-app" });

			const newState = windowsSlice(existingState, action);

			expect(newState["test-app"]!.zIndex).toBe(6);
		});

		it("should handle pushing non-existent window to front", () => {
			const action = pushToFront({ windowId: "non-existent" });

			const newState = windowsSlice(initialState, action);

			expect(newState).toEqual(initialState);
			expect(console.warn).toHaveBeenCalledWith(
				"Window with ID non-existent not found",
			);
		});
	});

	describe("minimizeAllWindows", () => {
		it("should minimize all windows", () => {
			const existingState: WindowsState = {
				app1: {
					id: "app1",
					name: "App 1",
					icon: "terminal",
					isMaximized: false,
					isMinimized: false,
					zIndex: 5,
					position: { x: 100, y: 100 },
					size: { width: 800, height: 600 },
				},
				app2: {
					id: "app2",
					name: "App 2",
					icon: "settings",
					isMaximized: true,
					isMinimized: false,
					zIndex: 3,
					position: { x: 200, y: 200 },
					size: { width: 800, height: 600 },
				},
			};

			const action = minimizeAllWindows();

			const newState = windowsSlice(existingState, action);

			expect(newState["app1"]!.isMinimized).toBe(true);
			expect(newState["app1"]!.isMaximized).toBe(false);
			expect(newState["app2"]!.isMinimized).toBe(true);
			expect(newState["app2"]!.isMaximized).toBe(false);
		});

		it("should handle empty state", () => {
			const action = minimizeAllWindows();

			const newState = windowsSlice(initialState, action);

			expect(newState).toEqual(initialState);
		});
	});

	describe("multiple actions", () => {
		it("should handle open, maximize, and close sequence", () => {
			let state = windowsSlice(
				initialState,
				openWindow({
					appId: "test-app",
					app: mockDesktopApp,
				}),
			);

			state = windowsSlice(
				state,
				maximizeWindow({ windowId: "test-app" }),
			);
			expect(state["test-app"]!.isMaximized).toBe(true);

			state = windowsSlice(state, closeWindow({ windowId: "test-app" }));
			expect(state["test-app"]).toBeUndefined();
		});

		it("should handle z-index management across multiple actions", () => {
			let state = windowsSlice(
				initialState,
				openWindow({
					appId: "app1",
					app: { ...mockDesktopApp, id: "app1" },
				}),
			);

			state = windowsSlice(
				state,
				openWindow({
					appId: "app2",
					app: { ...mockDesktopApp, id: "app2" },
				}),
			);

			expect(state["app1"]!.zIndex).toBe(1);
			expect(state["app2"]!.zIndex).toBe(2);

			state = windowsSlice(state, pushToFront({ windowId: "app1" }));
			expect(state["app1"]!.zIndex).toBe(3);
		});
	});
});
