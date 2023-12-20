import { expect, describe, it } from 'bun:test'

import { StackWithArray, StackWithObject } from '@lib/stack'

describe('StackWithArray suite', () => {
    it('should create an empty stack', () => {
        const stack = new StackWithArray()

        expect(stack.isEmpty()).toBeTrue()
    })

    it('should return the last push element when the peek method is called', () => {
        const stack = new StackWithArray<number>()

        stack.push(1)
        expect(stack.peek()).toBe(1)

        stack.push(2)
        expect(stack.peek()).toBe(2)
    })

    it('should add a new item when the push method is called', () => {
        const stack = new StackWithArray<number>()

        stack.push(1)

        expect(stack.isEmpty()).toBeFalse()
    })

    it('should return the last element and remove it from the stack when the pop method is called', () => {
        const stack = new StackWithArray<number>()

        stack.push(1)
        stack.push(2)
        stack.push(3)

        const value = stack.pop()

        expect(value).toBe(3)
        expect(stack.peek()).toBe(2)
    })

    it('should clear the stack list when the method clear is called', () => {
        const stack = new StackWithArray<number>()

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)

        stack.clear()

        expect(stack.isEmpty()).toBeTrue()
    })

    it('should return the stack size when the size method is called', () => {
        const stack = new StackWithArray()

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)

        expect(stack.size()).toBe(4)
    })

    it('should return the stack items reversed', () => {
        const stack = new StackWithArray()

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)

        stack.reverse()

        expect(stack.peek()).toBe(1)
    })
    

    it('should return the stack items in a string', () => {
        const stack = new StackWithArray()

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)

        const value = stack.to_string()

        expect(value).toBe('4321')
    })
})

describe('StackWithObject suite', () => {
    it('should create an empty stack', () => {
        const stack = new StackWithObject()

        expect(stack.isEmpty()).toBeTrue()
    })

    it('should return the last push element when the peek method is called', () => {
        const stack = new StackWithObject<number>()

        stack.push(1)
        expect(stack.peek()).toBe(1)

        stack.push(2)
        expect(stack.peek()).toBe(2)
    })

    it('should add a new item when the push method is called', () => {
        const stack = new StackWithObject<number>()

        stack.push(1)

        expect(stack.isEmpty()).toBeFalse()
    })

    it('should return the last element and remove it from the stack when the pop method is called', () => {
        const stack = new StackWithObject<number>()

        stack.push(1)
        stack.push(2)
        stack.push(3)

        const value = stack.pop()

        expect(value).toBe(3)
        expect(stack.peek()).toBe(2)
    })

    it('should clear the stack list when the method clear is called', () => {
        const stack = new StackWithObject<number>()

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)

        stack.clear()

        expect(stack.isEmpty()).toBeTrue()
    })

    it('should return the stack size when the size method is called', () => {
        const stack = new StackWithObject()

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)

        expect(stack.size()).toBe(4)
    })
})
