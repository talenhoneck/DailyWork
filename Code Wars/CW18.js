// Write a method which defines an infinite sequence for a given rule, and allows use of the #take and #take_while methods (JS: take and takeWhile property) to get 'n' elements of the sequence, or all elements that match a condition.

// Example:

// sequence {|n| n}.take_while {|n| n < 10} => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// sequence {|n| (n * n)}.take(10) => [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

function* sequence(fun) {
    let n = 0;
    while (true) {
      yield fun(n);
      n++;
    }
  }
  
  sequence.prototype.take = function (count) {
    const result = [];
    const iterator = this[Symbol.iterator]();
    for (let i = 0; i < count; i++) {
      result.push(iterator.next().value);
    }
    return result;
  };
  
  sequence.prototype.takeWhile = function (condition) {
    const result = [];
    const iterator = this[Symbol.iterator]();
    let currentValue = iterator.next().value;
    while (condition(currentValue)) {
      result.push(currentValue);
      currentValue = iterator.next().value;
    }
    return result;
  };

//   answer 2
function sequence( fun ){
    const take=n=> [...Array(n).keys()].map(fun),
    takeWhile = b => {
      let r = [], i = -1
      while (b(fun(++i)))
        r.push(fun(i))
      return r
    }
    return {take,takeWhile}
  }