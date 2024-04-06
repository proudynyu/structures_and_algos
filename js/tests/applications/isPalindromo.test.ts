import { expect, describe, it} from 'bun:test'

import {isPalindromo} from '@app/isPalindromo'

describe('isPalindromo suite', () => {
    it('should return false if no word is passed', () => {
        const result = isPalindromo(undefined)

        expect(result).toBeFalse()
    })

    it('should return true if the word is a palindrome', () => {
        const result = isPalindromo('ana')

        expect(result).toBeTrue()
    })

    it('should return false if the word is not a palindrome', () => {
        const result = isPalindromo('word')

        expect(result).toBeFalse()
    })
})
