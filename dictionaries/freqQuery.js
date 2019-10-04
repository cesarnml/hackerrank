/*
You are given  queries. Each query is of the form two integers described below:
-  : Insert x in your data structure.
-  : Delete one occurence of y from your data structure, if present.
-  : Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.

The queries are given in the form of a 2-D array  of size  where  contains the operation, and  contains the data element. For example, you are given array . The results of each operation are:

Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1
Return an array with the output: .

Function Description

Complete the freqQuery function in the editor below. It must return an array of integers where each element is a  if there is at least one element value with the queried number of occurrences in the current array, or 0 if there is not.

freqQuery has the following parameter(s):

queries: a 2-d array of integers
Input Format

The first line contains of an integer , the number of queries.
Each of the next  lines contains two integers denoting the 2-d array .

Constraints

All 
Output Format

Return an integer array consisting of all the outputs of queries of type .
*/

function freqQuery(queries) {
  let result = []
  const hash = {}
  for (let query of queries) {
    if (query[0] === 1) {
      hash[query[1]] = ++hash[query[1]] || 1
    } else if (query[0] === 2) {
      if (hash[query[1]] > 0) {
        hash[query[1]] = --hash[query[1]]
      }
    } else {
      Object.values(hash).includes(query[1]) ? result.push(1) : result.push(0)
    }
  }
  return result
}

console.log(freqQuery([[3, 4], [2, 1003], [1, 16], [3, 1]]))
