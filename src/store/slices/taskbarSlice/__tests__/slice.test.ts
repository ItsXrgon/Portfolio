/// <reference types="bun-types" />
import { beforeEach, describe, expect, it } from "bun:test";

import { DesktopApp } from "@/store/types";

import taskbarSlice, {
	addToTaskbar,
	pinApp,
	removeFromTaskbar,
	reorderTaskbar,
	unpinApp,
} from "../slice";
import { TaskbarState } from "../types";

describe("Taskbar Slice", () => {
	let initialState: TaskbarState;
	let mockDesktopApp: DesktopApp;

	beforeEach(() => {
		initialState = {};
		mockDesktopApp = {
			id: "test-app",
			name: "Test App",
			icon: "github",
			position: 0,
		};
	});

	describe("addToTaskbar", () => {
		it("should add app to taskbar", () => {
			const action = addToTaskbar({
				appId: "test-app",
				app: mockDesktopApp,
			});

			const newState = taskbarSlice(initialState, action);

			expect(newState["test-app"]).toEqual({
				id: "test-app",
				name: "Test App",
				icon: "github",
				pinned: false,
			});
		});

		it("should add app to taskbar with pinned status", () => {
			const action = addToTaskbar({
				appId: "test-app",
				app: mockDesktopApp,
				pinned: true,
			});

			const newState = taskbarSlice(initialState, action);

			expect(newState["test-app"]).toEqual({
				id: "test-app",
				name: "Test App",
				icon: "github",
				pinned: true,
			});
		});

		it("should not add app if it already exists", () => {
			const existingState: TaskbarState = {
				"test-app": {
					id: "test-app",
					name: "Existing App",
					icon: "github",
					pinned: false,
				},
			};

			const action = addToTaskbar({
				appId: "test-app",
				app: mockDesktopApp,
			});

			const newState = taskbarSlice(existingState, action);

			expect(newState["test-app"]).toEqual(existingState["test-app"]!);
		});
	});

	describe("removeFromTaskbar", () => {
		it("should remove unpinned app from taskbar", () => {
			const existingState: TaskbarState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					pinned: false,
				},
			};

			const action = removeFromTaskbar({ appId: "test-app" });

			const newState = taskbarSlice(existingState, action);

			expect(newState["test-app"]).toBeUndefined();
		});

		it("should not remove pinned app without force", () => {
			const existingState: TaskbarState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					pinned: true,
				},
			};

			const action = removeFromTaskbar({ appId: "test-app" });

			const newState = taskbarSlice(existingState, action);

			expect(newState["test-app"]).toEqual(existingState["test-app"]!);
		});

		it("should remove pinned app with force", () => {
			const existingState: TaskbarState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					pinned: true,
				},
			};

			const action = removeFromTaskbar({
				appId: "test-app",
				force: true,
			});

			const newState = taskbarSlice(existingState, action);

			expect(newState["test-app"]).toBeUndefined();
		});

		it("should not remove non-existent app", () => {
			const action = removeFromTaskbar({ appId: "non-existent" });

			const newState = taskbarSlice(initialState, action);

			expect(newState).toEqual(initialState);
		});
	});

	describe("pinApp", () => {
		it("should pin an existing app", () => {
			const existingState: TaskbarState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					pinned: false,
				},
			};

			const action = pinApp({ appId: "test-app" });

			const newState = taskbarSlice(existingState, action);

			expect(newState["test-app"]!.pinned).toBe(true);
		});

		it("should not affect non-existent app", () => {
			const action = pinApp({ appId: "non-existent" });

			const newState = taskbarSlice(initialState, action);

			expect(newState).toEqual(initialState);
		});

		it("should not change already pinned app", () => {
			const existingState: TaskbarState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					pinned: true,
				},
			};

			const action = pinApp({ appId: "test-app" });

			const newState = taskbarSlice(existingState, action);

			expect(newState["test-app"]).toEqual(existingState["test-app"]!);
		});
	});

	describe("unpinApp", () => {
		it("should unpin an existing pinned app", () => {
			const existingState: TaskbarState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					pinned: true,
				},
			};

			const action = unpinApp({ appId: "test-app" });

			const newState = taskbarSlice(existingState, action);

			expect(newState["test-app"]!.pinned).toBe(false);
		});

		it("should not affect non-existent app", () => {
			const action = unpinApp({ appId: "non-existent" });

			const newState = taskbarSlice(initialState, action);

			expect(newState).toEqual(initialState);
		});

		it("should not change already unpinned app", () => {
			const existingState: TaskbarState = {
				"test-app": {
					id: "test-app",
					name: "Test App",
					icon: "github",
					pinned: false,
				},
			};

			const action = unpinApp({ appId: "test-app" });

			const newState = taskbarSlice(existingState, action);

			expect(newState["test-app"]).toEqual(existingState["test-app"]!);
		});
	});

	describe("reorderTaskbar", () => {
		it("should reorder apps in taskbar", () => {
			const existingState: TaskbarState = {
				app1: {
					id: "app1",
					name: "App 1",
					icon: "github",
					pinned: false,
				},
				app2: {
					id: "app2",
					name: "App 2",
					icon: "settings",
					pinned: false,
				},
				app3: {
					id: "app3",
					name: "App 3",
					icon: "terminal",
					pinned: false,
				},
			};

			const action = reorderTaskbar({ oldIndex: 0, newIndex: 2 });

			const newState = taskbarSlice(existingState, action);

			// Check that the order has changed
			const appIds = Object.keys(newState);
			expect(appIds[0]).toBe("app2");
			expect(appIds[1]).toBe("app3");
			expect(appIds[2]).toBe("app1");
		});

		it("should not reorder with invalid oldIndex", () => {
			const existingState: TaskbarState = {
				app1: {
					id: "app1",
					name: "App 1",
					icon: "github",
					pinned: false,
				},
			};

			const action = reorderTaskbar({ oldIndex: -1, newIndex: 0 });

			const newState = taskbarSlice(existingState, action);

			expect(newState).toEqual(existingState);
		});

		it("should not reorder with invalid newIndex", () => {
			const existingState: TaskbarState = {
				app1: {
					id: "app1",
					name: "App 1",
					icon: "github",
					pinned: false,
				},
			};

			const action = reorderTaskbar({ oldIndex: 0, newIndex: 5 });

			const newState = taskbarSlice(existingState, action);

			expect(newState).toEqual(existingState);
		});

		it("should not reorder with out of bounds oldIndex", () => {
			const existingState: TaskbarState = {
				app1: {
					id: "app1",
					name: "App 1",
					icon: "github",
					pinned: false,
				},
			};

			const action = reorderTaskbar({ oldIndex: 5, newIndex: 0 });

			const newState = taskbarSlice(existingState, action);

			expect(newState).toEqual(existingState);
		});

		it("should handle reordering with same indices", () => {
			const existingState: TaskbarState = {
				app1: {
					id: "app1",
					name: "App 1",
					icon: "github",
					pinned: false,
				},
				app2: {
					id: "app2",
					name: "App 2",
					icon: "settings",
					pinned: false,
				},
			};

			const action = reorderTaskbar({ oldIndex: 0, newIndex: 0 });

			const newState = taskbarSlice(existingState, action);

			expect(newState).toEqual(existingState);
		});
	});

	describe("multiple actions", () => {
		it("should handle add, pin, and remove sequence", () => {
			let state = taskbarSlice(
				initialState,
				addToTaskbar({
					appId: "test-app",
					app: mockDesktopApp,
				}),
			);

			state = taskbarSlice(state, pinApp({ appId: "test-app" }));
			expect(state["test-app"]!.pinned).toBe(true);

			state = taskbarSlice(
				state,
				removeFromTaskbar({ appId: "test-app" }),
			);
			expect(state["test-app"]).toBeDefined(); // Should not be removed because it's pinned

			state = taskbarSlice(
				state,
				removeFromTaskbar({ appId: "test-app", force: true }),
			);
			expect(state["test-app"]).toBeUndefined(); // Should be removed with force
		});
	});
});
