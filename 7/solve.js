const solve1 = (input) => {
  const toCheck = ["shiny gold"];
  let outerBags = new Set();
  while (toCheck.length !== 0) {
    const curBag = toCheck.pop();
    input.forEach((rule) => {
      if (rule.includes(curBag) && rule.indexOf(curBag) !== 0) {
        // NOTE. If curBag is outermost bag in rule, that doesn't help us
        const ruleOuterBag = rule.slice(0, rule.indexOf("bags") - 1);
        // Add outermost bag in rule to list of potential outermost bags
        // This might just be incrementing the count
        if (!outerBags.has(ruleOuterBag)) {
          outerBags.add(ruleOuterBag);
          toCheck.push(ruleOuterBag);
        }
      }
    });
    // Can we somehow filter here to get rid of rules that we already 'used'?
    // Not sure if necessary or an optimisation yet
  }
  return outerBags.size;
};

const solve2 = (input) => {
  // rules = {
  //   color: [[color, number], ...]
  // }
  const rules = {};
  input.forEach((rule) => {
    const ruleOuterBag = rule.slice(0, rule.indexOf("bags") - 1);
    let children = [];
    if (rule.includes("no other bags")) {
      // DO NOTHING, children should be empty array
    } else if (!rule.includes(",")) {
      const numberColor = rule.slice(
        rule.indexOf("contain") + 8,
        rule.indexOf(".")
      );
      children.push(getTupleFromNumberColor(numberColor));
    } else {
      const contained = rule.slice(rule.indexOf("contain") + 8);
      const numberColors = contained.split(", ");
      numberColors[numberColors.length - 1] = numberColors[
        numberColors.length - 1
      ].slice(0, -1);
      children = numberColors.map((numberColor) =>
        getTupleFromNumberColor(numberColor)
      );
    }
    rules[ruleOuterBag] = children;
  });
  return getCountContainedFromColor("shiny gold", rules);
};

const getCountContainedFromColor = (color, rules) => {
  if (rules[color].length === 0) {
    return 0;
  } else {
    return rules[color].reduce((acc, cur) => {
      const res =
        acc + cur[0] + cur[0] * getCountContainedFromColor(cur[1], rules);
      return res;
    }, 0);
  }
};

const getTupleFromNumberColor = (numberColor) => {
  const number = parseInt(numberColor.slice(0, numberColor.indexOf(" ")));
  const color = numberColor.slice(
    numberColor.indexOf(" ") + 1,
    numberColor.indexOf("bag") - 1
  );
  return [number, color];
};

module.exports = { solve1, solve2 };
