const fs = require("fs");

const getStringArrayFromInput = (path) => {
  return fs.readFileSync(path, "utf-8")
               .toString()
               .split('\n');
}

const getStringArrayFromInputEmptyLine = (path) => {
  return fs.readFileSync(path, "utf-8")
               .toString()
               .split('\n\n');
}

module.exports = { getStringArrayFromInput, getStringArrayFromInputEmptyLine };