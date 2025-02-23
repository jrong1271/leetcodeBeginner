// Difficulty: Easy
// Level: 1
// Problem: Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Constraints: 1 <= ransomNote.length, magazine.length <= 10^5
// All characters in ransomNote and magazine are lowercase English letters.
//
// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false
//
// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
//
// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
//
// Plan:
// 1. Create a variable ransomNoteFound and set it to false.
// 2. Iterate through ransomNote.
// 3. Iterate through magazine.
// 4. If ransomNote[i] is equal to magazine[j], remove the character from ransomNote and magazine.
// 5. If ransomNote is empty, return true.
// 6. If ransomNote is not empty, return false.

export function canConstruct(ransomNote: string, magazine: string): boolean {
  let ransomNoteFound = false;
  for (let i = 0; i < ransomNote.length; i++) {
    for (let j = 0; j < magazine.length; j++) {
      if (ransomNote[i] === magazine[j]) {
        ransomNote = ransomNote.slice(1);
        magazine = magazine.slice(0, j) + magazine.slice(j+1);
        i--;
        ransomNoteFound = true;
        break;
      }
    }
    if (ransomNoteFound === false) {
      break;
    }
  }
  return ransomNote.length < 1 ? true : false ;
};