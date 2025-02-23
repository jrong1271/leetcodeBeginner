// Difficulty: Easy
// Level: 1
// Problem: You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Constraints: 1 <= word1.length, word2.length <= 100
//
// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
//
// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
//
// Example 3:
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
//
// Plan:
// 1. Create a variable steps.
// 2. Create a variable result and set it to an array of word1.
// 3. If word1 is longer than word2, set steps to word2.length.
// 4. If word2 is longer than word1, set steps to word1.length.
// 5. Iterate through steps.
// 6. If i is less than steps, add word2[i] to result[i].
// 7. If i is equal to steps, add the remaining characters of word2 to result.
// 8. Return result as a string.
//
// Time Complexity: O(n)
// Space Complexity: O(n)
//
// Justification:
// The time complexity is O(n) because we iterate through the steps.
// The space complexity is O(n) because we store the result in an array.
//
// Additional Notes:
// - The characters of word1 and word2 are merged in alternating order.
// - The remaining characters of the longer string are appended to the end of the merged string.
// - The merged string is returned as the result.
//
// @param {string} word1
// @param {string} word2
// @return {string}

export function mergeAlternately(word1: string, word2: string): string {
  let steps;
  const result: string[] = word1.split('');
  if ( word1.length > word2.length ) {
    steps = word2.length;
  } else {
    steps = word1.length;
  }
  for (let i = 0; i <= steps; i++) {
    if (i<steps) {
      result[i] += word2[i];
    }
    if ( i === steps) {
      if (word2.length > steps) {
        result.push(word2.slice(steps));
      }
    }
  }
  return result.join("");
};