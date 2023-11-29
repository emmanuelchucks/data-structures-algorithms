import { describe, expect, it } from "bun:test"
import { binarySearch } from "./binary-search"

describe("binary-search", () => {
	it("should return the index of the element", () => {
		expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3)
	})

	it("should return -1 if the element is not found", () => {
		expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1)
	})
})
