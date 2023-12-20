export class StackWithArray<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public push(element: T): T[] {
    this.items.push(element);

    return this.items;
  }

  public pop(): T | undefined {
    return this.items.pop();
  }

  public peek(): T {
    return this.items[this.items.length - 1];
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public clear(): void {
    this.items = [] as T[];
  }

  public size(): number {
    return this.items.length;
  }

  public reverse(): T[] {
    return this.items.reverse();
  }

  public to_string(): string {
    return this.reverse().join('');
  }
}

export class StackWithObject<T> {
  private count: number = 0;
  private items: {[key: number]: T} = {};

  constructor() {}

  public push(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  public pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const value = this.items[this.count];
    delete this.items[this.count];

    return value;
  }

  public peek(): T | undefined {
    if (this.count === 0) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  public isEmpty(): boolean {
    return this.count === 0;
  }

  public clear(): void {
    this.items = {};
    this.count = 0;
  }

  public size(): number {
    return this.count;
  }

  public reverse(): T[] {
  }

  public to_string(): string {
  }
}
