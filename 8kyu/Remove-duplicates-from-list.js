// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// My solution
function distinct(a) {
  const seen = new Set();
  const result = [];

  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (!seen.has(element)) {
      seen.add(element);
      result.push(element);
    }
  }

  return result;
}
