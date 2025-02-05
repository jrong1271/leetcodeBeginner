export function twoSum(nums: number[], target: number): number[] {
  const resArr: number[] = [];
  const map: Map<number, number> = new Map();
  let match: number | undefined;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    match = map.get(target - current);
    if (match!== undefined) {
      return [i, match];
    }
    map.set(current, i);
  }
  return resArr;
}