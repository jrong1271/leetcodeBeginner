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