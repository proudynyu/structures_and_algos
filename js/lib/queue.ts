export class Queue<T> {
  private count: number;
  private lowCount: number;
  private items: {[key: number]: T};

  constructor() {
    this.count = 0;
    this.lowCount = 0;
    this.items = {};
  }

  public enqueue(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  public dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this.items[this.lowCount];
    delete this.items[this.lowCount];
    this.lowCount++;

    return item;
  }

  public peek(): T | undefined {
    if (this.isEmpty()) return undefined;

    return this.items[this.lowCount];
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

  public clone(): Queue<T> {
    const queue = new Queue<T>();

    for (let i = 0; i <= this.size() - 1; i++) {
      queue.enqueue(this.items[i]);
    }

    return queue;
  }

  public to_string(): string {
    const cloned = this.clone();
    let result = '';

    for (let i = 0; (i = cloned.size()); i++) {
      result += `${cloned.dequeue()}`;
    }

    return result;
  }
}
