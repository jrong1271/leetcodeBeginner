// Difficulty: Easy
// Level: 1
// Problem: Given an integer n, return a string array answer (1-indexed) where: answer[i] == 'FizzBuzz' if i is divisible by 3 and 5.
// Constraints: 1 <= n <= 10^4
//
// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]
//
// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
//
// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","
// 13","14","FizzBuzz"]
//
// Plan:
// 1. Create an empty array result.
// 2. Iterate from 1 to n.
// 3. Create a variable s and set it to an empty string.
// 4. If i is divisible by 3, add 'Fizz' to s.
// 5. If i is divisible by 5, add 'Buzz' to s.
// 6. If s is empty, add i to s.
// 7. Add s to result.
// 8. Return result.
//
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// Justification:
// The time complexity is O(n) because we iterate through the numbers from 1 to n.
// The space complexity is O(1) because we only use a constant amount of space.
//

export function fizzBuzz(n: number): string[] {
  const result:string[] = [];
  for (let i = 1; i <= n; i++) {
    let s = '';
    if (i%3 ===0 ) {
      s +='Fizz';
    }
    if (i%5 ===0) {
      s +='Buzz';
    }
    if (s === '') {
      s += i.toString();
    }
    result.push(s);
  }
  return result;
};