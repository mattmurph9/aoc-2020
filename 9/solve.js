const canSumFrom = (num, pre) => {
  pre.sort((a, b) => a - b);
  let i = 0;
  let j = pre.length - 1;
  while (i < j) {
    if (pre[i] + pre[j] === num) {
      return true;
    } else if (pre[i] + pre[j] < num) {
      i++;
    } else if (pre[i] + pre[j] > num) {
      j--;
    }
  }
  return false;
}

const solve1 = (input) => {
  const data = input.map(num => parseInt(num));
  for (let i = 25; i < data.length; i++) {
    const pre = data.slice(i - 25, i);
    const cur = data[i];
    if (!canSumFrom(cur, pre)) {
      return cur;
    }
  }
}

const solve2 = (input) => {
  const target = solve1(input);
  const data = input.map(num => parseInt(num));
  let curSum = data[0];
  let i = 0;
  let j = 0;
  while (curSum !== target && i < data.length && j < data.length) {
    if (curSum > target) {
      curSum -= data[i];
      i++;
    } else if (curSum < target) {
      j++;
      curSum += data[j];
    }
  }
  const solRange = data.slice(i, j + 1);
  solRange.sort((a, b) => a - b);
  return solRange[0] + solRange[solRange.length - 1];
}

module.exports = { solve1, solve2 }