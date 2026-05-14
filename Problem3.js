

const grid = [
  [1, 1, 0, 0, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 1, 0, 0]
];

const visited = [];
for (let i = 0; i < 5; i++) {
  visited.push([false, false, false, false, false]);
}

function explore(row, col) {
  if (row < 0 || row >= 5) return;
  if (col < 0 || col >= 5) return;
  if (visited[row][col]) return;
  if (grid[row][col] === 0) return;

  visited[row][col] = true;

  explore(row - 1, col); // up
  explore(row + 1, col); // down
  explore(row, col - 1); // left
  explore(row, col + 1); // right
}

let clusters = 0;

for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 5; col++) {
    if (grid[row][col] === 1 && !visited[row][col]) {
      explore(row, col);
      clusters++;
    }
  }
}


console.log(clusters); 

//Answer :5