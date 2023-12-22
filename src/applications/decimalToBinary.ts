import { StackWithArray } from '@lib/stack';

export function decimalToBinary(decimalNumber: number): string {
  const remStack = new StackWithArray<number>();

  let rec = decimalNumber;
  let rest;

  while (rec > 0) {
    rest = Math.floor(rec % 2);
    remStack.push(rest);
    rec = Math.floor(rec / 2);
  }

  return remStack.to_string();
}
