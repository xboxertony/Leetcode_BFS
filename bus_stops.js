var numBusesToDestination = function (routes, source, target) {

    // 站牌-->公車

    if (source === target) { return 0 }

    let station = {}

    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            if (!(routes[i][j] in station)) {
                station[routes[i][j]] = new Set([i])
            } else {
                station[routes[i][j]].add(i)
            }
        }
    }

    // 公車-->站牌

    let route = routes.map((x) => { return new Set(x) })

    let [bus, stops] = [new Set(), new Set([source])]

    let arr = [[source, 0]]

    while (arr.length !== 0) {

        const [s, bus_cnt] = arr.shift()

        if (s === target) return bus_cnt

        for (let ss of station[s]) {

            if (bus.has(ss)) continue

            for (let b of route[ss]) {

                if (stops.has(b)) continue

                bus.add(ss)
                stops.add(b)
                arr.push([b, bus_cnt + 1])
            }
        }
    }

    return -1

};