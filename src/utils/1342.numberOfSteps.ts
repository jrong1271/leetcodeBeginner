// Difficulty: Easy
// Level: 1
// Problem: Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
// Constraints: 0 <= num <= 10^6
//
// Example 1:
// Input: num = 14
// Output: 6
//
// Example 2:
// Input: num = 8
// Output: 4
//
// Example 3:
// Input: num = 123
// Output: 12
//
// Plan:
// 1. Create a variable steps and set it to 0.
// 2. While num is greater than 0:
// 3. If num is odd, subtract 1 from num.
// 4. If num is even, divide num by 2.
// 5. Increment steps by 1.
// 6. Return steps.
//
// Time Complexity: O(log(num))
// Space Complexity: O(1)
//
// Justification:
// The time complexity is O(log(num)) because we divide num by 2 each iteration.
// The space complexity is O(1) because we only use a constant amount of space.
//
// Additional Notes:
// - The number of steps is calculated by dividing the number by 2 if it is even and subtracting 1 if it is odd.
// - The steps are incremented each time the number is divided or subtracted.
// - The process continues until the number reaches 0.
// - The number of steps is returned as the result.
//

export function numberOfSteps(num : number) : number {
    let steps = 0; 
    while (num > 0) {
        if (num % 2 > 0) {
            num -= 1;
        } else {
            num /= 2;
        }
        steps++;
    }
    return steps;
};