const solve1 = (input) => {
  const expenses = input.map((expense) => parseInt(expense));
  expenses.sort((a, b) => a - b);
  let solution;
  let i = 0;
  let j = expenses.length - 1;
  while (i < j) {
    if (expenses[i] + expenses[j] === 2020) {
      solution = expenses[i] * expenses[j];
      break;
    } else if (expenses[i] + expenses[j] < 2020) {
      i++;
    } else if (expenses[i] + expenses[j] > 2020) {
      j--;
    }
  }
  return solution;
};

const solve2 = (input) => {
  const expenses = input.map((expense) => parseInt(expense));
  expenses.sort((a, b) => a - b);
  let solution;
  let i = 0;
  while (i < expenses.length - 2) {
    let j = i + 1;
    let k = expenses.length - 1;
    while (j < k) {
      if (expenses[i] + expenses[j] + expenses[k] === 2020) {
        solution = expenses[i] * expenses[j] * expenses[k];
        break;
      } else if (expenses[i] + expenses[j] + expenses[k] < 2020) {
        j++;
      } else if (expenses[i] + expenses[j] + expenses[k] > 2020) {
        k--;
      }
    }
    if (solution) {
      break;
    }
    i++;
  }
  return solution;
};

module.exports = { solve1, solve2 };
