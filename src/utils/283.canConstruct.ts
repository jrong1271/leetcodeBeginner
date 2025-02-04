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