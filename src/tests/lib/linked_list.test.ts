import { expect, it, describe } from "bun:test";

import {LinkedList, Node} from '@lib/linked_list'

describe('Node suite', () => {
    it('should create a node with a undefined reference to the next node', () => {
        const node = new Node<number>(1)

        expect(node.next).toBeUndefined()
        expect(node.value).toBe(1)
    })
})

describe('LinkedList suite', () => {
    it('should create an empty list', () => {
        const list = new LinkedList<number>()

        expect(list.isEmpty()).toBeTrue()
    })

    it('should add a new node to the end of the list', () => {
        const list = new LinkedList<number>()

        list.push(1)
        expect(list.size()).toBe(1)

        list.push(2)
        expect(list.size()).toBe(2)
    })

    it('should return the list stringifyed', () => {
        const list = new LinkedList<number>()

        list.push(1)
        list.push(2)
        list.push(3)

        const s = list.toString()

        expect(s).toBe("123")
    })
})
