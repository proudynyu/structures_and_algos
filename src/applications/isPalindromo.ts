import { Dequeue } from "@lib/dequeue";

export function isPalindromo(word?: string): boolean {
    if (!word) return false;

    const deque = new Dequeue<string>();

    const lowerCaseWord = word.toLocaleLowerCase();

    let isEqual = true;
    let firstChar, lastChar;

    for (let i = 0; i < lowerCaseWord.length; i++) {
        deque.addBack(lowerCaseWord.charAt(i));
    }

    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();

        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }

    return isEqual;
}

const palindromes = ["ana", "not", "madam"];

palindromes.forEach(word => {
    console.log({ word, isPalindromo: isPalindromo(word) });
});
