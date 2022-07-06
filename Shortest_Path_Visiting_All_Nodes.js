var shortestPathLength = function (graph) {

    let l = graph.length

    let arr = []

    for (let i = 0; i < l; i++) {
        arr.push([i, 1 << i, 0])
    }

    let past = new Set()

    let ans = 0

    while (arr.length !== 0) {

        // console.log(arr)

        const [node, path, cnt] = arr.shift()

        if (path === (1 << l) - 1) {
            ans = cnt
            break
        }

        for (let i = 0; i < graph[node].length; i++) {

            let mask_ = path | (1 << graph[node][i])

            if (!past.has(`${graph[node][i]}${mask_}`)) {
                past.add(`${graph[node][i]}${mask_}`)
                arr.push([graph[node][i], mask_, cnt + 1])
            }
        }

    }

    return ans

};