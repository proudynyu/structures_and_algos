import { StackWithObject } from "@lib/stack"

export function baseConverter(decimalNumber: number, base: number): string {
    if (base < 2 || base > 36) {
        return ""
    }

    const remStack = new StackWithObject<number>()
    const digits = "0123456789ABCDEFGHYJKLMNOPQRSTUVWXYZ"

    let num = decimalNumber
    let rem = 0;
    let baseString = "";

    while (num > 0) {
        rem = Math.floor(num % base);
        remStack.push(rem)
        num = Math.floor(num / base);
    }

    while (!remStack.isEmpty()) {
        // @ts-ignore
        baseString += digits[remStack.pop()]
    }

    return baseString
}
