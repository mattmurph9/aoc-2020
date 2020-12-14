const convertEmptySeat = (i, j, seating) => {
  const indices = [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
  // If an adjacent seat is occupied, seat stays empty
  // else seat becomes occupied
  return indices.some((location) => {
    // If the indices are in bounds
    if (
      location[0] >= 0 &&
      location[0] < seating.length &&
      location[1] >= 0 &&
      location[1] <= seating[0].length
    ) {
      return seating[location[0]][location[1]] === "#";
    }
    return false;
  })
    ? "L"
    : "#";
};

const convertOccupiedSeat = (i, j, seating) => {
  const indices = [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
  return indices.filter((location) => {
    // If the indices are in bounds
    if (
      location[0] >= 0 &&
      location[0] < seating.length &&
      location[1] >= 0 &&
      location[1] <= seating[0].length
    ) {
      return seating[location[0]][location[1]] === "#";
    }
    return false;
  }).length >= 4
    ? "L"
    : "#";
};

const countVisibleOccupiedSeats = (i, j, seating) => {
  let occupiedVisible = 0;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) {
        continue;
      }
      let ci = i + dy;
      let cj = j + dx;
      while (
        ci >= 0 &&
        ci < seating.length &&
        cj >= 0 &&
        cj < seating[0].length
      ) {
        if (seating[ci][cj] === "#") {
          occupiedVisible++;
          break;
        } else if (seating[ci][cj] === "L") {
          break;
        }
        ci += dy;
        cj += dx;
      }
    }
  }
  return occupiedVisible;
};

const solve1 = (input) => {
  let before = [...input];
  let changed = true;
  while (changed) {
    changed = false;
    const after = before.map((oldRow, i) => {
      const newRow = oldRow
        .split("")
        .map((spot, j) => {
          // If spot is an empty seat
          if (spot === "L") {
            return convertEmptySeat(i, j, before);
          }
          // else if spot is an occupied seat
          else if (spot === "#") {
            return convertOccupiedSeat(i, j, before);
          }
          // else if spot is floor, do nothing, return spot
          else {
            return spot;
          }
        })
        .join("");
      if (newRow !== oldRow) {
        changed = true;
      }
      return newRow;
    });
    before = [...after];
  }
  let count = 0;
  before.forEach((row, i) => {
    count += row
      .split("")
      .filter((spot) => spot === "#")
      .join("").length;
  });
  return count;
};

const solve2 = (input) => {
  let before = [...input];
  let changed = true;
  while (changed) {
    changed = false;
    const after = before.map((oldRow, i) => {
      const newRow = oldRow
        .split("")
        .map((spot, j) => {
          // If spot is an empty seat
          if (spot === "L") {
            return countVisibleOccupiedSeats(i, j, before) > 0 ? "L" : "#";
          }
          // else if spot is an occupied seat
          else if (spot === "#") {
            return countVisibleOccupiedSeats(i, j, before) >= 5 ? "L" : "#";
          }
          // else if spot is floor, do nothing, return spot
          else {
            return spot;
          }
        })
        .join("");
      if (newRow !== oldRow) {
        changed = true;
      }
      return newRow;
    });
    before = [...after];
  }
  let count = 0;
  before.forEach((row) => {
    count += row
      .split("")
      .filter((spot) => spot === "#")
      .join("").length;
  });
  return count;
};

module.exports = { solve1, solve2 };
