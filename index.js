const { getStringArrayFromInput, getStringArrayFromInputEmptyLine } = require('./utils');

if(process.argv.length < 3) {
  throw new Error('Must provide argument, either all or desired day to run');
  process.exit(1);
}

const arg = process.argv[2];

if (arg === 'all') {
  for(let i = 1; i < 9; i++) {
    const { solve1, solve2 } = require(`./${i}/solve`);

    const input = [4, 6].includes(i) ? getStringArrayFromInputEmptyLine(`./${i}/input.txt`) : getStringArrayFromInput(`./${i}/input.txt`);

    console.log(`Day ${i} Part 1 solution: `, solve1(input));
    console.log(`Day ${i} Part 2 solution: `, solve2(input));
  }
} else {
  const day = parseInt(arg);
  const { solve1, solve2 } = require(`./${day}/solve`);

  const input = [4, 6].includes(day) ? getStringArrayFromInputEmptyLine(`./${day}/input.txt`) : getStringArrayFromInput(`./${day}/input.txt`);

  console.log(`Day ${day} Part 1 solution: `, solve1(input));
  console.log(`Day ${day} Part 2 solution: `, solve2(input));
}

