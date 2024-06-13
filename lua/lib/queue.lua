Queue = {}
Queue.__index = Queue

function Queue.new()
    local self = setmetatable({}, Queue)
    self.count = 0
    self.low = 0
    self.items = {}
    return self
end
