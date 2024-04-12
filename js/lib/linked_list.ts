export class Node<T> {
    public value: T;
    public next: Node<T> | undefined;

    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
}

export class LinkedList<T> {
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;
    private count: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.count = 0;
    }

    public push(element: T): void {
        this.count++;
        const node = new Node<T>(element);

        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        const current = this.tail;

        current.next = node;
        this.tail = node;
    }

    // public insert(element: Node<T>, where: number): void {}
    //
    public getElementAt(index: number): Node<T> | undefined {
        if (index < 0 || index > this.count - 1) {
            return undefined
        }

        let current = this.head
        let previous;
        let element;
        for (let i = 0; i < this.count; i++) {
            if (i === index) {
                element = current
                break
            }
            previous = current
            current = current?.next
        }
        
        return element
    }

    public removeAt(index: number): T | undefined {
        if (index < 0 || index > this.count || this.isEmpty()) {
            return undefined;
        }

        let current: Node<T> | undefined = this.head;
        this.count--;

        if (index === 0) {
            this.head = this.head?.next;
            return current?.value;
        }

        let previous;
        for (let i = 0; i <= index; i++) {
            previous = current;
            current = current?.next;
        }

        if (previous?.next) {
            previous.next = current?.next;
        }

        return current?.value;
    }

    public isEmpty(): boolean {
        return this.count === 0 && this.head === undefined;
    }

    public size(): number {
        return this.count;
    }

    public toString(): string {
        let result = ""

        for (let i = 0; i < this.count; i++) {
            const elem = this.getElementAt(i)
            result += String(elem?.value)
        }

        return result
    }
}
