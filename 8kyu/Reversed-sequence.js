// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// My solution
const reverseSeq = n => {
    const result = [];
    for (let i = n; i >= 1; i--) {
      result.push(i);
    }
    return result;
  };