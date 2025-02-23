// Difficulty: Easy
// Level: 1
// Problem: Given an array nums, return the running sum of nums.
// The ith running sum is the sum of the elements from 0 to i.
// Constraints: 1 <= nums.length <= 1000, -10^6 <= nums[i] <= 10^6
//
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
//
// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
//
// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
//
// Plan:
// 1. Iterate through nums starting from the second element.
// 2. Add the current element to the previous element.
// 3. Return nums.
//
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// Justification:
// The time complexity is O(n) because we iterate through the nums array once.
// The space complexity is O(1) because we modify the input array in place.
//
// Additional Notes:
// - The running sum is calculated by adding the current element to the previous element.
// - The process continues until the last element is reached.
// - The running sum is returned as the result.
//

export function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i]+= nums[i-1];
  }
  return nums;
};
