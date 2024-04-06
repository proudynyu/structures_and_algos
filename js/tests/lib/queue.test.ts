import { expect, it, describe } from "bun:test"

import { Queue } from "@lib/queue"

describe("Queue suite", () => {
    it("should create an empty Queue", () => {
        const queue = new Queue<number>()

        expect(queue.size()).toBe(0)
        expect(queue.peek()).toBeUndefined()
        expect(queue.isEmpty()).toBeTrue()
    })

    it("should add new items to the queue", () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        queue.enqueue(2)

        expect(queue.size()).toBe(2)
        expect(queue.peek()).toBe(1)
    })

    it("should remove the first item from the Queue", () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)

        expect(queue.size()).toBe(4)

        const value = queue.dequeue()

        expect(value).toBe(1)
        expect(queue.size()).toBe(3)
    })

    it("should clear the Queue", () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.size()).toBe(3)

        queue.clear()

        expect(queue.isEmpty()).toBeTrue()
    })


    it ("should be possible to create a clone of the Queue", () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        const clone = queue.clone()

        expect(clone.size()).toBe(3)
        expect(clone.peek()).toBe(1)
    })

    it("should return the Queue stringifyed", () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        const stringQueue = queue.to_string()

        expect(stringQueue).toBe("123")
    })
})
