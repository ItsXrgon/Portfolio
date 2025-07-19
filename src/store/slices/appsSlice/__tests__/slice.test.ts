/// <reference types="bun-types" />
import { beforeEach, describe, expect, it, spyOn } from "bun:test";

import { initialApps } from "../data";
import appsSlice, { relocateApp } from "../slice";
import { AppsState } from "../types";

describe("Apps Slice", () => {
	let initialState: AppsState = initialApps;

	beforeEach(() => {
		initialState = initialApps;
		// Mock console.warn to avoid noise in tests
		spyOn(console, "warn").mockImplementation(() => {});
	});

	describe("relocateApp", () => {
		it("should relocate an app to a valid empty position", () => {
			const appId = "0";
			const newPosition = 100;
			const action = relocateApp({ appId, position: newPosition });

			const newState = appsSlice(initialState, action);

			expect(newState[appId]!.position).toBe(newPosition);
			expect(console.warn).not.toHaveBeenCalled();
		});

		it("should not relocate app when app ID does not exist", () => {
			const nonExistentAppId = "non-existent";
			const newPosition = 100;
			const action = relocateApp({
				appId: nonExistentAppId,
				position: newPosition,
			});

			const newState = appsSlice(initialState, action);

			expect(newState).toEqual(initialState);
			expect(console.warn).toHaveBeenCalledWith(
				`App with ID ${nonExistentAppId} not found`,
			);
		});

		it("should handle multiple relocations correctly", () => {
			const appId1 = "0";
			const appId2 = "1";
			const newPosition1 = 100;
			const newPosition2 = 101;

			let state = appsSlice(
				initialState,
				relocateApp({ appId: appId1, position: newPosition1 }),
			);
			state = appsSlice(
				state,
				relocateApp({ appId: appId2, position: newPosition2 }),
			);

			expect(state[appId1]!.position).toBe(newPosition1);
			expect(state[appId2]!.position).toBe(newPosition2);
		});
	});
});
