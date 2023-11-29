export function binarySearch(array: number[], target: number): number {
	let startIndex = 0
	let endIndex = array.length - 1

	do {
		const middleIndex = Math.floor((startIndex + endIndex) / 2)

		if (array[middleIndex] === target) {
			return middleIndex
		}

		if (array[middleIndex] < target) {
			startIndex = middleIndex + 1
		} else {
			endIndex = middleIndex - 1
		}
	} while (startIndex <= endIndex)

	return -1
}
