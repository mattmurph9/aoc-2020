const solve1 = (input) => {
  const arrive = parseInt(input[0]);
  const busIds = input[1]
    .split(",")
    .filter((id) => id !== "x")
    .map((id) => parseInt(id));
  const depTimes = busIds.map((id) => {
    const rem = arrive % id;
    const depTime = rem === 0 ? arrive : arrive - rem + id;
    return { busId: id, depTime };
  });
  let min = depTimes[0];
  depTimes.forEach((depTime) => {
    min = depTime.depTime < min.depTime ? depTime : min;
  });
  return (min.depTime - arrive) * min.busId;
};

const done = (busIds, i) =>
  busIds.every(
    (busId) => {
      const rem = i % busId.id;
      const depTime = rem === 0 ? i : i - rem + busId.id;
      const diff = depTime - i;
      return diff === busId.index % busId.id;
    }
  );

const solve2 = (input) => {
  const busIds = input[1]
    .split(",")
    .map((id, i) => {
      return id === "x" ? id : { id: parseInt(id), index: i };
    })
    .filter((id) => id !== "x");
  let i = 0;
  let incr = 1;
  busIds.forEach(busId => {
    let diff;
    do {
      i += incr;
      const rem = i % busId.id;
      const depTime = rem === 0 ? i : i - rem + busId.id;
      diff = depTime - i;
    } while (diff !== busId.index % busId.id);
    incr *= busId.id;
  });
  return i;
};

module.exports = { solve1, solve2 };
