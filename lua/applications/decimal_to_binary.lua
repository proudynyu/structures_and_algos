require("math")
require("lib/stack")

--- Convert a decimal number to binary
---@param decimal number
function DecimalToBinary(decimal)
    local stack = Stack.new()

    local num = decimal
    local rem
    local binary_string = ""

    while num > 0 do
        rem = math.floor(num  % 2)
        stack:push(rem)
        num = math.floor(num / 2)
    end

    while not stack:is_empty() do
        binary_string = binary_string .. tostring(stack:pop())
    end

    return binary_string
end

print(DecimalToBinary(10))
print(DecimalToBinary(16))
print(DecimalToBinary(255))
