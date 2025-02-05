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