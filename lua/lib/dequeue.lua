Dequeue = {}
Dequeue.__index = Dequeue

function Dequeue.new()
    local self = setmetatable({}, Dequeue)
    self.items = {}
    self.count = nil
    self.low = nil

    return self
end

function Dequeue:add_front(element)
    if self:is_empty() then
        self:add_back(element)
    elseif self.low > 1 then
        self.low = self.low - 1
        self.items[self.low] = element
    else
        for i = self.count, 0, 1 do
            self.items[i] = self.items[i - 1]
        end
        self.count = self.count + 1
        self.low = 1
        self.items[self.low] = element
    end
end

function Dequeue:add_back(element)
    if self:is_empty() then
        self.item[self.low] = element
        self.low = 1
        self.count = 1
    else
        self.item[self.count] = element
        self.count = self.count + 1
    end
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
    self.count = self.count - 1
    self.low = self.low + 1

    if self.count == self.low then
        self.count = nil
        self.low = nil
    end

    return item
end

function Dequeue:remove_back()
    if self:is_empty() then
        return nil
    end

    local item = self.items[self.count]
    self.items[self.count] = nil

    if self.count == self.low then
        self.count = nil
        self.low = nil
    else
        self.count = self.count - 1
    end

    return item
end

function Dequeue:is_empty()
    return self.count == nil
end

function Dequeue:size()
    if self.count == nil then
        return 0
    end

    return self.count - self.low
end

function Dequeue:clear()
    self.low = nil
    self.count = nil
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
    local dequeue = self:clone()
    local result = ""

    while not dequeue:is_empty() do
        local item = dequeue:remove_front()

        if item ~= nil then
            result = result .. tostring(item)
        end
    end

    return result
end
