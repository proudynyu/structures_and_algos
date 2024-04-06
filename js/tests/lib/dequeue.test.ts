import { expect, it, describe } from "bun:test";

import { Dequeue } from "@lib/dequeue";

describe("Dequeue suite", () => {
    it("should create an empty Dequeue", () => {
        const dequeue = new Dequeue<number>();

        expect(dequeue.isEmpty()).toBeTrue();
    });

    it("should add new items at the back to the queue", () => {
        const dequeue = new Dequeue<number>();

        dequeue.addBack(1);
        dequeue.addBack(2);

        expect(dequeue.isEmpty()).toBeFalse();
        expect(dequeue.size()).toBe(2);
        expect(dequeue.peekBack()).toBe(2);
        expect(dequeue.peekFront()).toBe(1);
    });

    it("should add new items at the front to the queue", () => {
        const dequeue = new Dequeue<number>();

        dequeue.addFront(1);
        dequeue.addFront(2);

        expect(dequeue.isEmpty()).toBeFalse();
        expect(dequeue.size()).toBe(2);
        expect(dequeue.peekFront()).toBe(2);
        expect(dequeue.peekBack()).toBe(1);
    });

    it("should remove the first item from the Dequeue", () => {
        const dequeue = new Dequeue<number>();

        dequeue.addBack(1);
        dequeue.addBack(2);

        expect(dequeue.size()).toBe(2);

        dequeue.removeFront();

        expect(dequeue.size()).toBe(1);
        expect(dequeue.peekFront()).toBe(2);
    });

    it("should remove the last item from the Dequeue", () => {
        const dequeue = new Dequeue<number>();

        dequeue.addBack(1);
        dequeue.addBack(2);

        expect(dequeue.size()).toBe(2);

        dequeue.removeBack();

        expect(dequeue.size()).toBe(1);
        expect(dequeue.peekBack()).toBe(1);
    });

    it("should clear the Dequeue", () => {
        const dequeue = new Dequeue<number>();

        dequeue.addBack(1);
        dequeue.addBack(2);

        expect(dequeue.size()).toBe(2);

        dequeue.clear();

        expect(dequeue.isEmpty()).toBeTrue();
    });

    it("should be possible to create a clone of the Dequeue", () => {
        const dequeue = new Dequeue<number>();

        dequeue.addBack(1);
        dequeue.addBack(2);

        const clone = dequeue.clone();

        expect(clone.size()).toBe(2);
        expect(clone.peekFront()).toBe(1);
    });

    it("should return the Dequeue stringifyed", () => {
        const dequeue = new Dequeue<number>();

        dequeue.addBack(1);
        dequeue.addBack(2);

        expect(dequeue.to_string()).toBe("12");
    });
});
