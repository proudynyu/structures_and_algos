package lib

type Stack[T string | int] struct {
	Items []T
}

func NewStackNumber() *Stack[int] {
	return &Stack[int]{}
}

func NewStackString() *Stack[string] {
	return &Stack[string]{}
}

func (stack *Stack[T]) Push(item T) *[]T {
	stack.Items = append(stack.Items, item)
	return &stack.Items
}

func (stack *Stack[T]) Pop() T {
}

func (stack *Stack[T]) Peek() T {
}

func (stack *Stack[T]) IsEmpty() bool {

}

func (stack *Stack[T]) Clear() {

}

func (stack *Stack[T]) Size() int {

}

func (stack *Stack[T]) Clone() {

}

func (stack *Stack[T]) String() string {

}
