// Selection Sort Algorithm
// Input: array => unsorted list of elements
// Output: sorted => sorted list of elements

// determine index of smallest element
// push value at smallest index into sorted array
// remove element at smallest index from unsorted array
// repeat until unsorted array is empty

function selectionSort(arr) {
  let sorted = []

  while (arr.length) {
    const smallIndex = findSmallest(arr)
    sorted.push(arr[smallIndex])
    arr.splice(smallIndex, 1)
  }
  return sorted
}

function findSmallest(arr) {
  let small = arr[0]
  let smallIndex = 0

  for (let i in arr) {
    if (arr[i] < small) {
      small = arr[i]
      smallIndex = i
    }
  }
  return smallIndex
}
