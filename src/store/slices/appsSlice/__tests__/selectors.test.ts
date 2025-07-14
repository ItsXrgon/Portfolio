/// <reference types="bun-types" />
import { beforeEach, describe, expect, it } from "bun:test";

import { initialApps } from "../data";
import { selectApp, selectApps, selectAppsIds } from "../selectors";
import { AppsState } from "../types";

describe("Apps Slice Selectors", () => {
	let state: {
		apps: AppsState;
	};

	beforeEach(() => {
		state = {
			apps: initialApps,
		};
	});

	describe("selectApps", () => {
		it("should select all apps", () => {
			const result = selectApps(state);
			expect(result).toEqual(initialApps);
		});

		it("should return empty object for empty state", () => {
			const emptyState = { apps: {} };
			const result = selectApps(emptyState);
			expect(result).toEqual({});
		});
	});

	describe("selectAppsIds", () => {
		it("should select app IDs", () => {
			const result = selectAppsIds(state);
			expect(result).toEqual(Object.keys(initialApps));
		});

		it("should return empty array for empty state", () => {
			const emptyState = { apps: {} };
			const result = selectAppsIds(emptyState);
			expect(result).toEqual([]);
		});
	});

	describe("selectApp", () => {
		it("should select app by ID", () => {
			const appId = "0";
			const selector = selectApp(appId);
			const result = selector(state);

			expect(result).toEqual(initialApps[appId]);
		});

		it("should return undefined for non-existent app", () => {
			const nonExistentAppId = "non-existent";
			const selector = selectApp(nonExistentAppId);
			const result = selector(state);

			expect(result).toBeUndefined();
		});
	});
});
