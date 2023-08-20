// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution
function findAverage(array) {
    if (array.length === 0) {
      return 0;
    }
  
    const sum = array.reduce((total, num) => total + num, 0);
    const average = sum / array.length;
    return average;
  }