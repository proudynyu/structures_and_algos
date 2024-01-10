import { expect, it, describe } from "bun:test";
import { hotPotato } from "@app/hotPotato";

describe('hotPotato suite', () => {
    it('should eliminate a user based on the round num passed', () => {
        const names = ['John', 'Doe', 'Maria', 'Joao']
        const {eliminated} = hotPotato(names, 2)

        const expectList = ['Maria', 'Doe', 'Joao']

        expect(eliminated).toEqual(expectList)
        expect(eliminated).toHaveLength(3)
    })

    it('should return the winner based on the round num passed', () => {
        const names = ['John', 'Doe', 'Maria', 'Joao']
        const {winner} = hotPotato(names, 2)

        expect(winner).toBe('John')
    })
})
