// DESCRIPTION:
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function(str) {
    return parseInt(str, 10);
  };

  //answer 2

  const stringToNumber = function(str) {
    return +str;
  };

  //answer 3

  const stringToNumber = function(str) {
    return Number(str);
  };

  //answer 4
  var stringToNumber = Number;