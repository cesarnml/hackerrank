// Create a hash_count of characters in a and b
// if a[key] != b[key], need to delete abs(a[key] - b[key])

function makeAnagram(a, b) {
  const aHash = {}
  const bHash = {}
  const keys = [...new Set(a + b)]
  // console.log(a.length)
  // console.log(b.length)
  // console.log(keys.length)
  for (let char of a) {
    aHash[char] = aHash[char] + 1 || 1
  }
  for (let char of b) {
    bHash[char] = bHash[char] + 1 || 1
  }
  // console.log(aHash)
  // console.log(bHash)
  let deletions = 0
  for (let key of keys) {
    if (aHash[key] !== bHash[key]) {
      if (!aHash[key]) aHash[key] = 0
      if (!bHash[key]) bHash[key] = 0
      deletions += Math.abs(aHash[key] - bHash[key])
    }
  }
  return deletions
}
