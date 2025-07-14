/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";

import { initialApps } from "../data";
import { AppsState } from "../types";
import { isGridPositionOccupied, isValidGridPosition } from "../utils";

describe("Apps Slice Utils", () => {
	describe("isValidGridPosition", () => {
		it("should return true for valid positions", () => {
			expect(isValidGridPosition(0)).toBe(true);
			expect(isValidGridPosition(50)).toBe(true);
			expect(isValidGridPosition(111)).toBe(true); // 7 * 16 - 1 = 111
		});

		it("should return false for invalid positions", () => {
			expect(isValidGridPosition(-1)).toBe(false);
			expect(isValidGridPosition(112)).toBe(false); // 7 * 16 = 112 (out of bounds)
			expect(isValidGridPosition(1000)).toBe(false);
		});
	});

	describe("isGridPositionOccupied", () => {
		it("should return true when position is occupied", () => {
			const state = initialApps;
			const occupiedPosition = state["0"]!.position;

			expect(isGridPositionOccupied(state, occupiedPosition)).toBe(true);
		});

		it("should return false when position is not occupied", () => {
			const state = initialApps;
			const emptyPosition = 999;

			expect(isGridPositionOccupied(state, emptyPosition)).toBe(false);
		});

		it("should return false for empty state", () => {
			const emptyState: AppsState = {};

			expect(isGridPositionOccupied(emptyState, 0)).toBe(false);
		});
	});
});
