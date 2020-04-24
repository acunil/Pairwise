"use strict";

function pairwise(arr, arg) {
  // intercept empty array
  if (arr.length === 0) return 0;

  // array to store indices to avoid reusing
  var used = [];

  arr.forEach((num, i) => {
    // variable of the pair number we are looking for
    let seek = arg - num;

    // iterate through rest of numbers to check for pairing, starting from next num
    for (let j = i + 1; j < arr.length; j++) {
      // if element is what we need, and hasn't already been used, push both indices to answer array
      if (arr[j] === seek && !used.includes(j) && !used.includes(i)) {
        return used.push(i, j);
      }
    }
  });

  // return sum of all used indices
  return used.reduce((a, b) => a + b);
}

console.log(pairwise([1, 1, 1], 2)); // 1
console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // 11
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // 10
console.log(pairwise([1, 3, 2, 4], 4)); // 1
