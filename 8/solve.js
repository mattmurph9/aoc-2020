const solve1 = (input) => {
  let acc = 0;
  let curLine = 0;
  let executedLines = new Set();
  while (!executedLines.has(curLine)) {
    executedLines.add(curLine);
    let instr = input[curLine];
    const command = instr.substr(0, 3);
    const arg = parseInt(instr.substr(4));
    switch (command) {
      case "acc":
        acc += arg;
        curLine++;
        break;
      case "jmp":
        curLine += arg;
        break;
      case "nop":
        curLine++;
        break;
    }
  }
  return acc;
};

const solve2 = (input) => {
  let acc = -1;
  input.some((instr, i) => {
    const command = instr.substr(0, 3);
    if (command === "jmp" || command === "nop") {
      const newInput = [...input];
      const newCommand = command === "jmp" ? "nop" : "jmp";
      newInput[i] = instr.replace(command, newCommand);
      const [terminated, curAcc] = willTerminate(newInput);
      if (terminated) {
        acc = curAcc;
        return true;
      }
    }
  });
  return acc;
};

const willTerminate = (input) => {
  let acc = 0;
  let curLine = 0;
  let executedLines = new Set();
  while (
    !executedLines.has(curLine) &&
    curLine >= 0 &&
    curLine < input.length
  ) {
    executedLines.add(curLine);
    let instr = input[curLine];
    const command = instr.substr(0, 3);
    const arg = parseInt(instr.substr(4));
    switch (command) {
      case "acc":
        acc += arg;
        curLine++;
        break;
      case "jmp":
        curLine += arg;
        break;
      case "nop":
        curLine++;
        break;
    }
  }
  return [curLine === input.length, acc];
};

module.exports = { solve1, solve2 };
