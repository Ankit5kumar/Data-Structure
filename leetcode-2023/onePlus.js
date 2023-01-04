// 66. Plus One
// Easy
// 6.2K
// 4.7K
// Companies
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
  
    // Create a copy of the input array
    let result = [...digits];
  
    // Start from the least significant digit
    let i = result.length - 1;
  
    // Increment the least significant digit by one
    result[i]++;
  
    // Carry over any overflows
    while (i > 0 && result[i] > 9) {
      result[i] = 0;
      result[i - 1]++;
      i--;
    }
  
    // If there is an overflow at the most significant digit, add a new digit to the front of the array
    if (result[0] > 9) {
      result[0] = 0;
      result.unshift(1);
    }
  
    return result;
  }