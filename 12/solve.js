const directions = ["E", "S", "W", "N"];

const solve1 = (input) => {
  let x = 0;
  let y = 0;
  let dir = 0;
  input.forEach((instr) => {
    let action = instr[0];
    if (action === "F") {
      action = directions[dir];
    }
    const value = parseInt(instr.substr(1));
    switch (action) {
      case "N":
        y += value;
        break;
      case "S":
        y -= value;
        break;
      case "E":
        x += value;
        break;
      case "W":
        x -= value;
        break;
      case "L": {
        const arg = (dir - value / 90) % 4;
        dir = (arg + 4) % 4;
        break;
      }
      case "R": {
        const arg = (dir + value / 90) % 4;
        dir = (arg + 4) % 4;
        break;
      }
    }
  });
  return Math.abs(x) + Math.abs(y);
};

const rotateWaypoint = (waypoint, numRotations) => {
  let [cdx, cdy] = [waypoint.dx, waypoint.dy];
  for (let i = 0; i < numRotations; i++) {
      const temp = cdy;
      cdy = cdx;
      cdx = temp;
      cdy *= -1;
  }
  return { dx: cdx, dy: cdy };
};

const solve2 = (input) => {
  let x = 0;
  let y = 0;
  let waypoint = { dx: 10, dy: 1 };
  input.forEach((instr) => {
    let action = instr[0];
    const value = parseInt(instr.substr(1));
    switch (action) {
      case "F":
        x += value * waypoint.dx;
        y += value * waypoint.dy;
        break;
      case "N":
        waypoint.dy += value;
        break;
      case "S":
        waypoint.dy -= value;
        break;
      case "E":
        waypoint.dx += value;
        break;
      case "W":
        waypoint.dx -= value;
        break;
      case "L": {
        const numRot = 4 - (value / 90) % 4;
        waypoint = rotateWaypoint(waypoint, numRot);
        break;
      }
      case "R": {
        const numRot = (value / 90) % 4;
        waypoint = rotateWaypoint(waypoint, numRot);
        break;
      }
    }
  });
  return Math.abs(x) + Math.abs(y);
};

module.exports = { solve1, solve2 };
