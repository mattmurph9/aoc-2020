const getTreesFromSlope = (dx, dy, input) => {
  const rowLen = input[0].length;
  let count = 0;
  let x = 0;
  let y = 0;
  while (y <= input.length - 1) {
    if (input[y][x] === "#") {
      count++;
    }
    x = (x + dx) % rowLen;
    y += dy;
  }
  return count;
};

const solve1 = (input) => {
  let i = 0;
  let count = 0;
  input.forEach((row) => {
    if (row[i] === "#") {
      count++;
    }
    i = (i + 3) % row.length;
  });
  return count;
};

const solve2 = (input) => {
  const solution =
    getTreesFromSlope(1, 1, input) *
    getTreesFromSlope(3, 1, input) *
    getTreesFromSlope(5, 1, input) *
    getTreesFromSlope(7, 1, input) *
    getTreesFromSlope(1, 2, input);
  return solution;
};

module.exports = { solve1, solve2 };
