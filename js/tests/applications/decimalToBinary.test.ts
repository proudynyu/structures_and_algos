import { expect, describe, it } from "bun:test"

import { decimalToBinary } from "@app/decimalToBinary"

describe("decimalToBinary suite", () => {
    it("should return the binary values for the decimal inputs", () => {
        expect(decimalToBinary(10)).toBe("1010")
        expect(decimalToBinary(233)).toBe("11101001")
        expect(decimalToBinary(1000)).toBe("1111101000")
    })
})
