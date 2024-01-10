import { Queue } from "@lib/queue";

export function hotPotato(elementsList: string[], num: number) {
    const queue = new Queue<string>();
    const eliminatedList: string[] = [];

    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            // @ts-ignore
            queue.enqueue(queue.dequeue());
        }
        // @ts-ignore
        eliminatedList.push(queue.dequeue());
    }

    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    };
}


const names = ['John', 'Doe', 'Maria', 'Joao']
const response = hotPotato(names, 2)

console.table(response)
