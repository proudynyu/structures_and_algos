export class Dequeue<T> {
    private items: { [key: number]: T }
    private count: number
    private lowCount: number

    constructor() {
        this.items = {}
        this.count = 0
        this.lowCount = 0
    }
}
