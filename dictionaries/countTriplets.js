/*
You are given an array and you need to find number of tripets of indices  such that the elements at those indices are in geometric progression for a given common ratio  and .

For example, . If , we have  and  at indices  and .

Function Description

Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given  as an integer.

countTriplets has the following parameter(s):

arr: an array of integers
r: an integer, the common ratio
Input Format

The first line contains two space-separated integers  and , the size of  and the common ratio.
The next line contains  space-seperated integers .

Constraints

Output Format

Return the count of triplets that form a geometric progression.
*/

function countTriplets(arr, r) {
  let count = 0
  let triplets = []
  const sorted = arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const triplet = String(arr[i]) + String(arr[j]) + String(arr[k])
        triplets.push(triplet)
      }
    }
  }
  const setArr = new Set(arr)
  const series = []
  for (let num of setArr) {
    series.push(String(num) + String(num * r) + String(num * r ** 2))
  }
  triplets.forEach(triplet => {
    if (series.includes(triplet)) {
      count++
    }
  })
  return count
}
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3))
