// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!


function expandedForm(num) {
    const numStr = num.toString();
    const result = [];
  
    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr[i]);
  
      if (digit !== 0) {
        const expanded = digit * Math.pow(10, numStr.length - 1 - i);
        result.push(expanded);
      }
    }
  
    return result.join(' + ');
  }



  function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }

// const { assert } = require('chai');

// describe("Full tests", () => {

//   function dotest(input, expected) {
//     assert.strictEqual(expandedForm(input), expected, `Incorrect answer for num=${input}`);
//   }
  
//   it("Basic tests", () => {
//     dotest(   12, '10 + 2');
//     dotest(   42, '40 + 2');
//     dotest(70304, '70000 + 300 + 4');
//   });

//   it("Zeros", function(){
//     dotest(420370022, '400000000 + 20000000 + 300000 + 70000 + 20 + 2');
//     dotest(70304, '70000 + 300 + 4');
//     dotest(9000000, '9000000');
//   });
  
//   it("Big Numbers", function(){
//     dotest(92093403034573, '90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3');
//     dotest(2096039485293, '2000000000000 + 90000000000 + 6000000000 + 30000000 + 9000000 + 400000 + 80000 + 5000 + 200 + 90 + 3');
//   });
  

//   it("Random Tests", function() {

//     function solution(num) {
//       let x = -1;
//       num = num.toString().split('').reverse().map(function(i) {
//         x++;
//         return i + '0'.repeat(x)
//       })
//       return num.filter((i => !(/^0+$/.test(i)))).reverse().join(' + ');
//     }

//     for(let test = 0; test < 100; test++) {
//       let num = 1 + Math.floor(Math.random() * 100000000);
//       dotest(num, solution(num));
//     }
//   });
// });