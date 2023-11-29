import { linearSearch } from "./linear-search"
import { describe, expect, test } from "bun:test"

describe("linear-search", () => {
	test("should return index of the element", () => {
		const arr = [1, 2, 3, 4, 5]
		const result = linearSearch(arr, 3)
		expect(result).toBe(2)
	})

	test("should return -1 if element is not found", () => {
		const arr = [1, 2, 3, 4, 5]
		const result = linearSearch(arr, 6)
		expect(result).toBe(-1)
	})
})
