require("math")
require("lib/stack")

--- comment convert a number to another base
--- @param decimalNumber number
--- @param base number
function BaseConverter(decimalNumber, base)
    if base < 2 or base > 36 then
        return ""
    end

    local stack = Stack.new()
    local digits = "0123456789ABCDEFGHYJKLMNOPQRSTUVWXYZ"

    local num = decimalNumber
    local rem = 0
    local baseString = ""

    while num > 0 do
        rem = math.floor(num % base)
        stack:push(rem)
        num = math.floor(num / base)
    end

    while not stack:is_empty() do
        local pop = stack:pop() + 1
        if pop ~= nil then
            baseString = baseString .. digits:sub(pop, pop)
        end
    end

    return baseString
end

print(BaseConverter(255, 16))
print(BaseConverter(10, 2))
print(BaseConverter(31, 8))
print(BaseConverter(2, 2))
