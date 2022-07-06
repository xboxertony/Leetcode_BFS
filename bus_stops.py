class Solution:

    def numBusesToDestination(self, routes: List[List[int]], source: int,
                              target: int) -> int:

        ### 站牌-->公車

        station = defaultdict(set)

        for i, r in enumerate(routes):

            for s in r:

                station[s].add(i)

        ### 公車-->站牌

        route = [set(r) for r in routes]

        bus, stops = set(), set([source])

        arr = deque([(source, 0)])

        while arr:

            stop, bus_cnt = arr.popleft()

            if stop == target: return bus_cnt

            for r in station[stop] - bus:

                for x in route[r] - stops:

                    bus.add(r)
                    stops.add(x)
                    arr.append((x, bus_cnt + 1))

        return -1