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
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowCount > 0) {
            this.lowCount--;
            this.items[this.lowCount] = element;
        } else {
            const newItems = {} as { [key: number]: T };
            newItems[0] = element;

            for (let i = 1; i <= this.count + 1; i++) {
                newItems[i] = this.items[i - 1];
            }

            this.items = newItems;
        }

        this.count++;
        this.lowCount = 0;
    }

    public addBack(element: T): void {
        this.items[this.count] = element
        this.count++ 
    }

    public peekFront(): T {
        return this.items[this.lowCount];
    }

    public peekBack(): T {
        return this.items[this.count - 1];
    }

    public removeFront(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        const value = this.items[this.lowCount];
        delete this.items[this.lowCount];

        this.lowCount++;
        return value;
    }

    public removeBack(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        const value = this.items[this.count];
        delete this.items[this.count];

        this.count--;
        return value;
    }

    public isEmpty(): boolean {
        return this.count === this.lowCount;
    }

    public size(): number {
        return this.count - this.lowCount;
    }

    public clear(): void {
        this.items = {};
        this.count = 0;
        this.lowCount = 0;
    }

    public clone(): Dequeue<T> {
        const dequeue = new Dequeue<T>();

        for (let i = 0; i <= this.size() - 1; i++) {
            dequeue.addFront(this.items[i]);
        }

        return dequeue;
    }

    public to_string(): string {
        const cloned = this.clone();
        let result = "";

        for (let i = 0; (i = cloned.size()); i++) {
            result += `${cloned.removeBack()}`;
        }

        return result;
    }
}
