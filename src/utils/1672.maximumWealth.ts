// Difficulty: Easy
// Level: 1
// Problem: You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank.
// Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.
// Constraints: m == accounts.length, n == accounts[i].length, 1 <= m, n <= 50, 1 <= accounts[i][j] <= 100
//
// Example 1:
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
//
// Example 2:
// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
//
// Plan:
// 1. Create a variable max and set it to 0.
// 2. Iterate through accounts.
// 3. Create a variable wealth and set it to 0.
// 4. Iterate through the account.
// 5. Add the balance to wealth.
// 6. If wealth is greater than max, set max to wealth.
// 7. Return max.
//
// Time Complexity: O(n*m)
// Space Complexity: O(1)
//
// Justification:
// The time complexity is O(n*m) because we iterate through the accounts array.
// The space complexity is O(1) because we only use a constant amount of space.
//
// Additional Notes:
// - The wealth of each customer is calculated by adding the balances of all their accounts.
// - The richest customer is the customer with the highest wealth.
// - The maximum wealth is returned as the result.
//
export function maximumWealth(accounts: number[][]): number {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    let wealth = 0;
    for (let j = 0; j < account.length; j++) {
      const balance = account[j];
      wealth+=balance;
    }
    if (wealth > max) {
      max = wealth;
    }
  }
  return max;
};