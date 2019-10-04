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
//* TOUGH!!!

function countTriplets(arr, r) {
  let mp2 = {}
  let mp3 = {}
  let count = 0

  arr.forEach(val => {
    if (mp3.hasOwnProperty(val)) count += mp3[val]
    if (mp2.hasOwnProperty(val))
      mp3[val * r] = (mp3[val * r] += mp2[val]) || mp2[val]
    mp2[val * r] = (mp2[val * r] += 1) || 1
  })

  return count
}
console.log(countTriplets([1, 2, 1, 2, 4], 2))
