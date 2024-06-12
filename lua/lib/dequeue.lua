Dequeue = {}
Dequeue.__index = Dequeue

function Dequeue.new()
    local self = setmetatable({}, Dequeue)
    self.items = {}
    self.count = 0
    self.low = 1

    return self
end

function Dequeue:add_front(element)
    if self.low > 1 then
        self.low = self.low - 1
    else
        for i = self.count, 0, -1 do
            self.items[i + 1] = self.items[i]
        end
        self.count = self.count + 1
        self.low = 1
    end
    self.items[self.low] = element
end

function Dequeue:add_back(element)
    self.count = self.count + 1
    self.items[self.count] = element
end

function Dequeue:peek_front()
    return self.items[self.low]
end

function Dequeue:peek_back()
    return self.items[self.count]
end

function Dequeue:remove_front()
    if self.count == nil then
        return nil
    end

    local item = self.items[self.low]
    self.items[self.low] = nil
    self.low = self.low + 1

    if self.count < self.low then
        self.count = 0
        self.low = 1
    end

    return item
end

function Dequeue:remove_back()
    if self:is_empty() then
        return nil
    end

    local item = self.items[self.count]
    self.items[self.count] = nil
    self.count = self.count - 1

    if self.count < self.low then
        self.count = 0
        self.low = 1
    end

    return item
end

function Dequeue:is_empty()
    return self.count < self.low
end

function Dequeue:size()
    return self.count - self.low + 1
end

function Dequeue:clear()
    self.low = 1
    self.count = 0
    self.items = {}
end

function Dequeue:clone()
    local dequeue = Dequeue.new()
    dequeue.low = self.low
    dequeue.count = self.count
    dequeue.items = {table.unpack(self.items)}
    return dequeue
end

function Dequeue:to_string()
    local result = ""

    for i = self.low, self.count, 1 do
        if self.items[i] ~= nil then
            result = result .. tostring(self.items[i])
        end
    end

    return result
end
