// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.


function getSum(a, b) {
    let sum = 0;
  
    // Swap a and b if a is greater than b
    if (a > b) {
      [a, b] = [b, a];
    }
  //in a loop add the numbers from the smaller one until it reaches the larger number
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  
    return sum;
  }


  
  //answer 2
  const GetSum = (a, b) => {
    // Find min and max
    let min = Math.min(a, b),
        max = Math.max(a, b);
    // return 
    // calculate the number of integers between and including min and max. Adding 1 accounts for the inclusive range.
    // Calculate the sum of all the integers between and including min and max using the formula for the sum of an arithmetic series, which is (n * (first term + last term)) / 2, where n is the number of terms. Here, n is (max - min + 1) and the first and last terms are min and max respectively.
    return (max - min + 1) * (min + max) / 2;
  }