function minimumSwaps(q) {
  let count = 0
  let swaps = 0
  do {
    swaps = 0
    for (let i = 0; i < q.length - 1; i++) {
      if (q[i] !== i + 1) {
        count++
        swaps++
        const temp = q[i]
        const temp2 = q[temp - 1]
        q[temp - 1] = temp
        q[i] = temp2
      }
    }
  } while (swaps !== 0)
  return count
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))
