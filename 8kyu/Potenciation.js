// The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata

// My solution
function power(x, y) {
    if (y === 0) {
      
      return 1;
    } else if (y < 0) {
     
      return 1 / power(x, -y);
    } else if (y % 2 === 0) {
    
      const result = power(x, y / 2);
      return result * result;
    } else {
      
      return x * power(x, y - 1);
    }
  }