// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My solution
function fakeBin(x) {
    let result = '';
    
    for (let i = 0; i < x.length; i++) {
      if (parseInt(x[i]) < 5) {
        result += '0';
      } else {
        result += '1';
      }
    }
    
    return result;
  }