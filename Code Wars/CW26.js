// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.




// Accept 1 string and determine if it is the same backword as forwards and return boolean
// 
// return true if palindrome and false if not palindrome
//
// Examples
// ababa = true
// bbbbab = false
//
// accept string variable
// split by character
// reverse the order
// compare accepted string to reversed string with if statement
// return true of false with turnary

function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()
  }
  
// const { assert } = require('chai');

// describe("Fixed tests", function() {
//   it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
//   it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
//   it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
//   it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
//   it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
//   it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
//   it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
//   it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
// });