// Binary Search Algorithm
// INPUT: array => sorted array; target => element to be found
// OUTPUT: index of target element or null if not found

// determine lower and upper bound indices to search
// calculate middle index (round down)
// guess element at middle index; compare to target; if target return middle index
// if guess less than target, set lower index to middle index + 1
// if guess larger than target, set higher index to middle index - 1; repeat until target found
// or no elements within new bounds to search

function binarySearch(array, target) {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    let mid = Math.floor((high + low) / 2)
    const guess = array[mid]
    if (guess === target) return mid
    if (guess < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return null
}

console.log(binarySearch([1, 2, 3], 3))
