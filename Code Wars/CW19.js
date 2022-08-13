// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    let result = ''
    for (i = 0; i < str.length; i++){
      const char = str[i]
      result += char + char
    }
    return result
  }

  //answer 2
  const doubleChar = (str) => str.split("").map(c => c + c).join("");

  function doubleChar(str) {
    return [...str].map(v=>v+v).join('');
  }