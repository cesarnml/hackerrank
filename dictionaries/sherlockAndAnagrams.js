/*
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example , the list of all anagrammatic pairs is  at positions  respectively.

Function Description

Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in .

sherlockAndAnagrams has the following parameter(s):

s: a string .
Input Format

The first line contains an integer , the number of queries.
Each of the next  lines contains a string  to analyze.

Constraints



String  contains only lowercase letters  ascii[a-z].

Output Format

For each query, return the number of unordered anagrammatic pairs.
*/

function sherlockAndAnagrams(s) {
  const sArray = s.split('')
  const hash = {}
  for (let i = 1; i <= sArray.length - 1; i++) {
    for (let j = 0; j <= sArray.length - i; j++) {
      let key = ''
      const value = sArray.slice(j, j + i).join('')
      for (let k = j; k < j + i; k++) {
        key += String(k)
      }
      hash[key] = value
    }
  }
  let subStrings = Object.values(hash)
  const sortedStrings = subStrings.map(string => {
    return string
      .split('')
      .sort()
      .join('')
  })
  let count = 0
  for (let i = 0; i < sortedStrings.length - 1; i++) {
    for (let j = i + 1; j < sortedStrings.length; j++) {
      if (sortedStrings[i] === sortedStrings[j]) {
        count++
      }
    }
  }
  return count
}

console.log(
  sherlockAndAnagrams(
    'ofeqjnqnxwidhbuxxhfwargwkikjqwyghpsygjxyrarcoacwnhxyqlrviikfuiuotifznqmzpjrxycnqktkryutpqvbgbgthfges'
  )
)
