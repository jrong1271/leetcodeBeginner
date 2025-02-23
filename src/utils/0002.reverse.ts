// reverse integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
//
// Example 1:
// Input: x = 123
// Output: 321
//
// Example 2:
// Input: x = -123
// Output: -321
//
// Example 3:
// Input: x = 120
// Output: 21
//
// Example 4:
// Input: x = 0
// Output: 0
//
// Constraints:
// -2^31 <= x <= 2^31 - 1
//
// Plan:
// 1. Create a variable min and set it to -2^31.
// 2. Create a variable max and set it to 2^31 - 1.
// 3. Create a variable sign and set it to Math.sign(x).
// 4. Set x to Math.abs(x).
// 5. Create a variable result and set it to 0.
// 6. Create a variable remainder.
// 7. While x is greater than 0, do the following:
// 8. Set remainder to x%10.
// 9. Set x to (x - remainder)/10.
// 10. Set result to result * 10 + remainder.
// 11. Multiply result by sign.
// 12. If result is greater than max, return 0.
// 13. If result is less than min, return 0.
// 14. Return result.
//
// Time Complexity: O(log(x))
// Space Complexity: O(1)
//
// Justification:
// The time complexity is O(log(x)) because we divide x by 10 each iteration.
// The space complexity is O(1) because we only use a constant amount of space.
//
// Additional Notes:
// - Math.sign(x) returns 1 if x is positive, -1 if x is negative, and 0 if x is 0.
// - Math.abs(x) returns the absolute value of x.
// - Math.pow(x, y) returns x raised to the power of y.
// - The remainder is calculated by x%10.
// - The quotient is calculated by (x - remainder)/10.
// - The result is calculated by result * 10 + remainder.
// - The result is multiplied by sign to account for the sign of x.
// - The result is checked against the min and max values to ensure it is within the 32-bit integer range.
// - If the result is outside the range, 0 is returned.
// - If the result is within the range, the result is returned.
//

export function reverse(x: number): number {
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31)-1;
  const sign = Math.sign(x);
  x = Math.abs(x);
  let result = 0;
  let remainder;
  
  while (x > 0) {
    remainder = x%10;
    x = (x - remainder)/10;
    result = result * 10 + remainder;
  }
  result *= sign;

  if (result > max ) return 0;
  if (result < min ) return 0;

  return result;
}