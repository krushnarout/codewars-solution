// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

// My soluition
function squareSum(numbers) {
  let sum = 0;

  // Iterate through the array
  for (let i = 0; i < numbers.length; i++) {
    // Square each number and add to the sum
    sum += numbers[i] ** 2;
  }

  return sum;
}
