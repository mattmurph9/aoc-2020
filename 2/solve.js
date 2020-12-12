const solve1 = (input) => {
  const solution = input.filter(item => {
    const lowerBound = parseInt(item.substring(0, item.indexOf('-')));
    const upperBound = parseInt(item.substring(item.indexOf('-') + 1, item.indexOf(' ')));
    const reqLetter = item[item.indexOf(':') - 1];
    const password = item.substring(item.indexOf(':') + 2);
    const re = new RegExp(reqLetter, 'g');
    const count = (password.match(re) || []).length;
    return count >= lowerBound && count <= upperBound;
  }, []);
  return solution.length;
}

const solve2 = (input) => {
  const solution = input.filter(item => {
    const lowerIndex = parseInt(item.substring(0, item.indexOf('-')));
    const upperIndex = parseInt(item.substring(item.indexOf('-') + 1, item.indexOf(' ')));
    const reqLetter = item[item.indexOf(':') - 1];
    const password = item.substring(item.indexOf(':') + 2);
    return password[lowerIndex - 1] === reqLetter ^ password[upperIndex - 1] === reqLetter;
  }, []);
  return solution.length;
}

module.exports = { solve1, solve2 }