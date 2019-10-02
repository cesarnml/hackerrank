function maxHourglassSum(sixBySix) {
  const hourglassSums = []
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      const hourglass = []
      for (let k = 0; k < 3; k++) {
        hourglass.push(sixBySix[i + k - 1].slice(j - 1, j + 2))
      }
      hourglassSums.push(sumHourglass(hourglass))
    }
  }
  return Math.max(...hourglassSums)
}

function sumHourglass(threeByThree) {
  const row1Sum = threeByThree[0].reduce((acc, cur) => (acc += cur), 0)
  const row3Sum = threeByThree[2].reduce((acc, cur) => (acc += cur), 0)
  return row1Sum + threeByThree[1][1] + row3Sum
}

const twoDArray = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]

console.log(maxHourglassSum(twoDArray))
