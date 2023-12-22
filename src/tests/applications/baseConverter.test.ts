import { expect, describe, it } from "bun:test"

import { baseConverter } from "@app/baseConverter"

describe("baseConverter suite", () => {
    it ("should return an empty string if the base is low then 2", () => {
        const value = baseConverter(10, 1)

        expect(value).toBe("")
    })

    it("should return an empty string if the base is higher than 36", () => {
        const value = baseConverter(10, 37)

        expect(value).toBe("")
    })

    it("should return the value converted to the base passed", () => {
        expect(baseConverter(10, 2)).toBe("1010")
        expect(baseConverter(10, 8)).toBe("12")
        expect(baseConverter(10, 16)).toBe("A")
    })
})
