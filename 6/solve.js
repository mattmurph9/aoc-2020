const solve1 = (input) => {
  let count = 0;
  input.forEach(inputGroup => {
    const group = inputGroup.replace(/\n/g, '');
    const unique = new Set(group);
    count += unique.size;
  })
  return count;
}

const solve2 = (input) => {
  let count = 0;
  input.forEach(inputGroup => {
    const group = inputGroup.split('\n');
    let agree;
    group.forEach((personAnswers, i) => {
      if (i === 0) {
        agree = new Set(personAnswers);
      }
      let nextPerson = new Set(personAnswers);
      agree.forEach(answer => {
        if (!nextPerson.has(answer)) {
          agree.delete(answer);
        }
      });
    });
    count += agree.size;
  });
  return count;
}

module.exports = { solve1, solve2 }