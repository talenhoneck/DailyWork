// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(n) {
    const roundedUpSqrt = Math.ceil(Math.sqrt(n));
    const nextSquare = roundedUpSqrt * roundedUpSqrt;
  
    return nextSquare === n ? (roundedUpSqrt + 1) * (roundedUpSqrt + 1) : -1;
  }
  

  //solution 2
  function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root - Math.floor(root) === 0 ? Math.pow(root+1, 2) : -1 ;
  }

  //solution 3
  function findNextSquare(sq) {
    var n = Math.sqrt(sq);
    return Number.isInteger(n)?(n+1)*(n+1):-1
  }