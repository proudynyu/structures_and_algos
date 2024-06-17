require('lib/queue')

function HotPotato(list, num)
    local queue = Queue.new()
    local eliminated = Queue.new()

    for i = 1, #list, 1 do
        queue:enqueue(list[i])
    end

    while queue:size() > 1 do
        for _ = 1, num, 1 do
            queue:enqueue(queue:dequeue())
        end

        eliminated:enqueue(queue:dequeue())
    end

    return eliminated, queue:dequeue()
end

local names = {
    "John", "Jack", "Camila", "Ingrid", "Carl"
}

local eliminated, winner = HotPotato(names, 7)

for i = 1, eliminated:size(), 1 do
    print("eliminated: ", eliminated.items[i])
end

print("winner: ", winner)

