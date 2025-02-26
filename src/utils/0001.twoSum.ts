// Difficulty: Easy
// Level: 1
// Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Constraints: 2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9
// All values in nums are distinct.
//
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
//
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
//
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
//
// Plan:
// 1. Create an empty array resArr.
// 2. Create a map.
// 3. Iterate through nums.
// 4. Create a variable current and set it to nums[i].
// 5. Create a variable match and set it to map.get(target - current).
// 6. If match is not undefined, return [i, match].
// 7. Set current as the key and i as the value in the map.
// 8. Return resArr.
//
// Time Complexity: O(n)
// Space Complexity: O(n)
//
// Justification:
// The time complexity is O(n) because we iterate through the nums array once.
// The space complexity is O(n) because we store the values in a map.

export function twoSum(nums: number[], target: number): number[] {
  const quotients = new Map<number, number>();
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (quotients.has(target - nums[i])) {
      ans.push([i, quotients.get(target - nums[i])!]);
    }
    quotients.set(nums[i], i);
  }
  return ans[0];
}

export function displayPairThatAddUpToTarget(list:number[], target:number){
  const ans = [];
  for (let i = 0; i < list.length; i++) {
    //[0, 2, 1, 3, 3, 6, 4], target 4
    // 
    let k = i+1; // 
    while (k < list.length) {
      console.log(list[i], list[k]);
      if (list[i] + list[k] === target) {
        ans.push([list[i], list[k]]);
      }
      k++;
    }
  }
  return ans;
}