Stack = {}
Stack.__index = Stack

function Stack.new()
    local self = setmetatable({}, Stack)

    self.items = {}
    self.first = nil
    self.last = nil

    return self
end

function Stack:push(item)
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

function Stack:is_empty()
    return self.first == nil
end

function Stack:pop()
    if self:is_empty() then
        return nil
    end

    local item = self.items[self.last]
    self.items[self.last] = nil
    self.last = self.last - 1

    if self.last < 1 then
        self.first = nil
        self.last = nil
    end

    return item
end

function Stack:peek()
    return self.items[self.last]
end

function Stack:clear()
    self.items = {}
    self.first = nil
    self.last = nil
end

function Stack:size()
    return #self.items
end

function Stack:clone()
    local stack = Stack.new()
    stack.first = self.first
    stack.last = self.last
    stack.items = {table.unpack(self.items)}
    return stack
end

function Stack:to_string()
    local stack = self:clone()
    local result = ""

    while not stack:is_empty() do
        local item = stack:pop()
        if item ~= nil then
            result = result .. tostring(item)
        end
    end

    return result
end
