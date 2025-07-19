import { describe, expect, it } from "bun:test";

import { getBounceDirection } from "../useTaskbarAppAnimation";

describe("getBounceDirection", () => {
	it("returns 'up' when opening from closed", () => {
		expect(getBounceDirection(false, false, true, false)).toBe("up");
	});
	it("returns 'up' when unminimizing", () => {
		expect(getBounceDirection(true, true, true, false)).toBe("up");
	});
	it("returns 'down' when minimizing", () => {
		expect(getBounceDirection(true, false, true, true)).toBe("down");
	});
	it("returns 'none' for unrelated state changes", () => {
		expect(getBounceDirection(false, false, false, true)).toBe("none");
		expect(getBounceDirection(true, false, true, false)).toBe("none");
	});
});
