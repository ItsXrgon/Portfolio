/// <reference types="bun-types" />
import { beforeEach, describe, expect, it } from "bun:test";

import {
	selectPinnedTaskbarItems,
	selectTaskbarApp,
	selectTaskbarApps,
	selectTaskbarAppsIds,
} from "../selectors";
import { TaskbarState } from "../types";

describe("Taskbar Slice Selectors", () => {
	let state: {
		taskbar: TaskbarState;
	};

	beforeEach(() => {
		state = {
			taskbar: {
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
					pinned: true,
				},
				app3: {
					id: "app3",
					name: "App 3",
					icon: "terminal",
					pinned: true,
				},
			},
		};
	});

	describe("selectTaskbarApps", () => {
		it("should select all taskbar apps", () => {
			const result = selectTaskbarApps(state);
			expect(result).toEqual(state.taskbar);
		});

		it("should return empty object for empty state", () => {
			const emptyState = { taskbar: {} };
			const result = selectTaskbarApps(emptyState);
			expect(result).toEqual({});
		});
	});

	describe("selectTaskbarAppsIds", () => {
		it("should select taskbar app IDs", () => {
			const result = selectTaskbarAppsIds(state);
			expect(result).toEqual(["app1", "app2", "app3"]);
		});

		it("should return empty array for empty state", () => {
			const emptyState = { taskbar: {} };
			const result = selectTaskbarAppsIds(emptyState);
			expect(result).toEqual([]);
		});

		it("should maintain order of app IDs", () => {
			const result = selectTaskbarAppsIds(state);
			// The order should match the order in the state object
			expect(result[0]).toBe("app1");
			expect(result[1]).toBe("app2");
			expect(result[2]).toBe("app3");
		});
	});

	describe("selectTaskbarApp", () => {
		it("should select app by ID", () => {
			const appId = "app1";
			const selector = selectTaskbarApp(appId);
			const result = selector(state);

			expect(result).toEqual(state.taskbar[appId]);
		});

		it("should return undefined for non-existent app", () => {
			const nonExistentAppId = "non-existent";
			const selector = selectTaskbarApp(nonExistentAppId);
			const result = selector(state);

			expect(result).toBeUndefined();
		});

		it("should return undefined for empty state", () => {
			const emptyState = { taskbar: {} };
			const selector = selectTaskbarApp("app1");
			const result = selector(emptyState);

			expect(result).toBeUndefined();
		});
	});

	describe("selectPinnedTaskbarItems", () => {
		it("should select only pinned taskbar items", () => {
			const result = selectPinnedTaskbarItems(state);

			expect(result).toHaveLength(2);
			expect(result).toEqual([
				{
					id: "app2",
					name: "App 2",
					icon: "settings",
					pinned: true,
				},
				{
					id: "app3",
					name: "App 3",
					icon: "terminal",
					pinned: true,
				},
			]);
		});

		it("should return empty array when no pinned items", () => {
			const stateWithNoPinned: { taskbar: TaskbarState } = {
				taskbar: {
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
				},
			};

			const result = selectPinnedTaskbarItems(stateWithNoPinned);

			expect(result).toEqual([]);
		});

		it("should return empty array for empty state", () => {
			const emptyState = { taskbar: {} };
			const result = selectPinnedTaskbarItems(emptyState);

			expect(result).toEqual([]);
		});
	});
});
