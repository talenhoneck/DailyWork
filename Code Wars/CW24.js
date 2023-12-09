// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  const combinedSet = new Set([...s1,...s2]);
  
  const result = Array.from(combinedSet).sort().join('');
  return result
  
}

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

// const Test = require('@codewars/test-compat');

// describe("longest",function() {
// it("Basic tests",function() {
//     Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
//     Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
//     Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
// })})