local Stack = {
    items = {},
    first = nil,
    last = nil,
}

function Stack.new()
    return {
        items = {},
        first = nil,
        last = nil,
    }
end

function Stack.push(self, item)
    local first = self.first
    local last = self.last

    if first == nil then
        first = 1
        last = 1
    else
        last = last + 1
    end

    self.items[last] = item
    self.first = first
    self.last = last
    return self.items
end

function Stack.is_empty(self)
    if self.first == nil then
        return true
    end

    return false
end

function Stack.pop(self)
    if self:is_empty() then
        return nil
    end

    local item = self.items[self.last]
    self.last = self.last - 1

    if self.last < 1 then
        self.first = nil
        self.last = nil
    end

    return item
end

function Stack.peek(self)
    return self.items[self.last]
end

function Stack.clear(self)
    self.items = {}
end

function Stack.size(self)
    return #self.items
end

function Stack.clone(self)
    local stack = Stack.new()
    stack.first = self.first
    stack.last = self.last
    stack.items = self.items

    return stack
end

function Stack.to_string(self)
    local stack = self.clone(self)
    local result = ""

    for _ = 1, self.size(self), 1 do
        local item = stack.pop(stack)
        if item ~= nil then
            result = result .. tostring(item)
        end
    end

    return result
end
