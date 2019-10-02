/*
Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Input Format

The first line contains a single string, .
The second line contains an integer, .

Output Format

Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.
*/

function repeatedString(s, n) {
  const hash = {}
  for (let char of s) {
    if (char === 'a') {
      hash['a'] = ++hash['a'] || 1
    }
  }
  if (hash['a'] === undefined) {
    return 0
  }
  const multiple = Math.floor(n / s.length)
  const remainder = n % s.length
  hash['a'] = hash['a'] * multiple
  for (let i = 0; i < remainder; i++) {
    if (s[i] === 'a') {
      hash['a'] = ++hash['a']
    }
  }
  return hash['a']
}
