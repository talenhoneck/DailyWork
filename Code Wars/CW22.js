// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// STRINGSFUNDAMENTALS
// Suggest kata description edits



function solution(str, ending){
    return str.endsWith(ending);
  }






const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
function check(str, ending, expected){
  var result = solution(str, ending)
  Test.assertEquals(result, expected, "Expected solution('" + str + "', '" + ending + "') to return " + expected)
}

check("samurai", "ai", true)
check("sumo", "omo", false)
check("ninja", "ja", true)
check("sensei", "i", true)
check("samurai", "ra", false)
check("abc", "abcd", false)
check("abc", "abc", true)
check("abcabc", "bc", true)
check('ails', 'fails', false)
check('fails', 'ails', true)
check('this', 'fails', false)
check("abc", "", true)
check(":-)", ":-(", false)
check("!@#$%^&*() :-)", ":-)", true)
  });
});