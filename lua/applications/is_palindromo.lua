require("lib/dequeue")

---@param word string
function Palindromo(word)
    if not word or #word == 0 then
        return false
    end

    local dequeue = Dequeue.new()
    for i = 1, string.len(word), 1 do
        local letter = string.sub(word, i, i)
        dequeue:add_back(letter)
    end

    local result = dequeue:to_string()

    return result == word
end

local word = "ana"
local result = Palindromo(word)

print("The word:", word, " is a palindromo:", result)
