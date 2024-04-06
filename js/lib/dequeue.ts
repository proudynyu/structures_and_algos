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
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }

            this.count++;
            this.lowCount = 0;
            this.items[this.lowCount] = element;
        }
    }

    public addBack(element: T): void {
        this.items[this.count] = element;
        this.count++;
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

        const value = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return value;
    }

    public isEmpty(): boolean {
        return this.count - this.lowCount === 0;
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
        const cloned = new Dequeue<T>();

        for (let i = this.lowCount; i < this.count; i++) {
            cloned.addBack(this.items[i]);
        }

        return cloned;
    }

    public to_string(): string {
        const cloned = this.clone()
        let result: string = ""

        for (let i = this.lowCount; i < this.count; i++) {
            result += `${cloned.removeFront()}`
        }

        return result
    }
}
