function solve(start, end) {
    const alphabet = ['A', 'B', 'C'];

    function isValid(s) {
        return !s.includes('CC');
    }

    function getNeighbors(s) {
        const result = [];
        for (let i = 0; i < s.length; i++) {
            for (const c of alphabet) {
                if (c !== s[i]) {
                    const next = s.slice(0, i) + c + s.slice(i + 1);
                    if (isValid(next)) result.push(next);
                }
            }
        }
        return result;
    }

    const dist = new Map();
    const pathCount = new Map();

    dist.set(start, 0);
    pathCount.set(start, 1);

    const queue = [start];

    while (queue.length > 0) {
        const current = queue.shift();
        const currentDist = dist.get(current);

        if (dist.has(end) && currentDist >= dist.get(end)) continue;

        for (const neighbor of getNeighbors(current)) {
            if (!dist.has(neighbor)) {
                dist.set(neighbor, currentDist + 1);
                pathCount.set(neighbor, pathCount.get(current));
                queue.push(neighbor);
            } else if (dist.get(neighbor) === currentDist + 1) {
                pathCount.set(neighbor, pathCount.get(neighbor) + pathCount.get(current));
            }
        }
    }

    return {
        length: dist.get(end) ?? -1,
        paths: pathCount.get(end) ?? 0
    };
}

const result = solve("AAAA", "BBBB");
console.log(`Length: ${result.length}`);
console.log(`Paths:  ${result.paths}`);

answer: Length: 4
Paths:  24
