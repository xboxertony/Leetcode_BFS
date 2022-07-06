class Solution:

    def shortestPathLength(self, graph: List[List[int]]) -> int:

        n = len(graph)

        arr = deque([(i, 1 << i, 0) for i in range(n)])

        past = set([(i, 1 << i) for i in range(n)])

        ans = 0

        while arr:

            node, path, le = arr.popleft()

            if path == (1 << n) - 1:

                ans = le

                break

            for i in graph[node]:

                mask_ = path | (1 << i)

                if (i, mask_) not in past:

                    arr.append((i, mask_, le + 1))

                    past.add((i, mask_))

        return ans