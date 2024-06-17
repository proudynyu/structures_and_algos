Queue = {}
Queue.__index = Queue

function Queue.new()
    local self = setmetatable({}, Queue)
    self.high = 1
    self.low = 1
    self.items = {}
    return self
end

function Queue:enqueue(element)
    self.items[self.high] = element
    self.high = self.high + 1
end

function Queue:dequeue()
    if self:is_empty() then
        return nil
    end

    local item = self.items[self.low]
    self.items[self.low] = nil
    self.low = self.low + 1

    return item
end

function Queue:peek()
    return self:is_empty() and nil or self.items[self.low]
end

function Queue:size()
    return self.high - self.low
end

function Queue:is_empty()
    return self:size() <= 0
end

function Queue:clear()
    self.items = {}
    self.high = 1
    self.low = 1
end

function Queue:clone()
    local clone = Queue.new()
    clone.low = self.low
    clone.high = self.high
    clone.items = {table.unpack(self.items)}
    return clone
end

function Queue:to_string()
    local result = ""
    local cloned = Queue:clone()

    while not cloned:is_empty() do
        local item = cloned:dequeue()
        result = result .. tostring(item)
    end

    return result
end
