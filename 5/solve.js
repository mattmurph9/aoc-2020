const solve1 = (input) => {
  let maxId = -1;
  input.forEach(seat => {
    let minRow = 0;
    let maxRow = 127;
    for(let i = 0; i < 7; i++) {
      switch(seat[i]) {
        case 'B':
          minRow = minRow + Math.floor((maxRow - minRow) / 2) + 1;
          break;
        case 'F':
          maxRow = Math.floor(maxRow - (maxRow - minRow) / 2);
          break;
      }
    }
    let minCol = 0;
    let maxCol = 7;
    for(let i = 7; i < 10; i++) {
      switch(seat[i]) {
        case 'R':
          minCol = minCol + Math.floor((maxCol - minCol) / 2) + 1;
          break;
        case 'L':
          maxCol = Math.floor(maxCol - (maxCol - minCol) / 2);
          break;
      }
    }
    const seatId = minRow * 8 + minCol;
    if (seatId > maxId) {
      maxId = seatId;
    }
  });
  return maxId;
}

const solve2 = (input) => {
  let seatIds = new Set();
  for(let i = 0; i < 1023; i++) {
    seatIds.add(i);
  }
  input.forEach(seat => {
    let minRow = 0;
    let maxRow = 127;
    for(let i = 0; i < 7; i++) {
      switch(seat[i]) {
        case 'B':
          minRow = minRow + Math.floor((maxRow - minRow) / 2) + 1;
          break;
        case 'F':
          maxRow = Math.floor(maxRow - (maxRow - minRow) / 2);
          break;
      }
    }
    let minCol = 0;
    let maxCol = 7;
    for(let i = 7; i < 10; i++) {
      switch(seat[i]) {
        case 'R':
          minCol = minCol + Math.floor((maxCol - minCol) / 2) + 1;
          break;
        case 'L':
          maxCol = Math.floor(maxCol - (maxCol - minCol) / 2);
          break;
      }
    }
    const seatId = minRow * 8 + minCol;
    seatIds.delete(seatId);
  });
  let mySeatId = -1;
  seatIds.forEach(id => {
    if(!seatIds.has(id + 1) && !seatIds.has(id - 1)) {
      mySeatId = id;
    }
  });
  return mySeatId;
}

module.exports = { solve1, solve2 };