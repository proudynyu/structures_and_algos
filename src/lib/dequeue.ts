export class Dequeue<T> {
    private items: { [key: number]: T };
    private count: number;
    private lowCount: number;

    constructor() {
        this.items = {};
        this.count = 0;
        this.lowCount = 0;
    }

    public addFront(element: T): void {
    }

    public addBack(element: T): void {
    }

    public peekFront(): T {
    }

    public peekBack(): T {
    }

    public removeFront(): T | undefined {
    }

    public removeBack(): T | undefined {
    }

    public isEmpty(): boolean {
    }

    public size(): number {
    }

    public clear(): void {
    }

    public clone(): Dequeue<T> {
    }

    public to_string(): string {
    }
}
