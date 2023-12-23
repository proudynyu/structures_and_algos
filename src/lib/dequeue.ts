export class Dequeue<T> {
  private items: {[key: number]: T};
  private count: number;
  private lowCount: number;

  constructor() {
    this.items = {};
    this.count = 0;
    this.lowCount = 0;
  }

  public addFront(element: T): void {}

  public addBack(element: T): void {}

  public peekFront(): T {}

  public peekBack(): T {}

  public removeFront(): T {}

  public removeBack(): T {}

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
    let result = '';

    for (let i = 0; (i = cloned.size()); i++) {
      result += `${cloned.removeBack()}`;
    }

    return result;
  }
}
