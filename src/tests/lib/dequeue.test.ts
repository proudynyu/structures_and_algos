import {expect, it, describe} from 'bun:test';

import {Dequeue} from '@lib/dequeue';

describe('Dequeue suite', () => {
    it("should create an empty Dequeue", () => {
        const dequeue = new Dequeue<number>()

        expect(dequeue.size()).toBe(0)
        expect(dequeue.peek()).toBeUndefined()
        expect(dequeue.isEmpty()).toBeTrue()
    })

    it("should add new items to the queue", () => {
        const dequeue = new Dequeue<number>()

        dequeue.enqueue(1)
        dequeue.enqueue(2)

        expect(dequeue.size()).toBe(2)
        expect(dequeue.peek()).toBe(1)
    })

    it("should remove the first item from the Dequeue", () => {
        const dequeue = new Dequeue<number>()

        dequeue.enqueue(1)
        dequeue.enqueue(2)
        dequeue.enqueue(3)
        dequeue.enqueue(4)

        expect(dequeue.size()).toBe(4)

        const value = dequeue.dequeue()

        expect(value).toBe(1)
        expect(dequeue.size()).toBe(3)
    })

    it("should clear the Dequeue", () => {
        const dequeue = new Dequeue<number>()

        dequeue.enqueue(1)
        dequeue.enqueue(2)
        dequeue.enqueue(3)

        expect(dequeue.size()).toBe(3)

        dequeue.clear()

        expect(dequeue.isEmpty()).toBeTrue()
    })


    it ("should be possible to create a clone of the Dequeue", () => {
        const dequeue = new Dequeue<number>()

        dequeue.enqueue(1)
        dequeue.enqueue(2)
        dequeue.enqueue(3)

        const clone = dequeue.clone()

        expect(clone.size()).toBe(3)
        expect(clone.peek()).toBe(1)
    })

    it("should return the Dequeue stringifyed", () => {
        const dequeue = new Dequeue<number>()

        dequeue.enqueue(1)
        dequeue.enqueue(2)
        dequeue.enqueue(3)

        const stringDedequeue = queue.to_string()

        expect(stringDedequeue).toBe("123")
    })

});
