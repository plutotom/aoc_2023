const { log } = require("console");
const fs = require("fs");
// const { reverseString } = require("./utils/utils.js");
const dataIn = fs.readFileSync("in.txt", "utf8");
let dataTest = fs.readFileSync("test.txt", "utf8");
const symbol = ["*", "%", "-", "#", "=", "@", "$", "/", "+", "&"];
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var data = dataTest.split("\n");

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if (numbersArr.includes(parseInt(data[i][j])) && data[i][j] != " ") {
      let isSymbol = checkIndex(data[i], data[i - 1], data[i + 1], j);
      var fullNum = 0;
      if (isSymbol) {
        let nextIndex = 0;
        [fullNum, nextIndex] = findFullNumber(data[i], data[i][j], j);
      }
    }
  }
}

/**
 * returns the full number and the next index to go to.
 *
 * @returns {array}
 */
function findFullNumber(
  currentLine,
  currentNumber,
  currentNumberIndex,
  startIndex = currentNumberIndex,
  endIndex = currentNumberIndex
) {
  if (parseInt(currentLine[startIndex - 1])) {
    findFullNumber(
      currentLine,
      parseInt(currentLine[startIndex - 1]),
      startIndex - 1,
      startIndex - 1,
      endIndex
    );
  } else if (!parseInt(currentLine[endIndex + 1])) {
    // console.log(currentLine.slice(startIndex, endIndex + 1));
    let x = currentLine.slice(startIndex, endIndex + 1);
    x;
    console.log(x);
    return [currentLine.slice(startIndex, endIndex + 1), endIndex + 2];
  } else {
    findFullNumber(
      currentLine,
      parseInt(currentLine[endIndex + 1]),
      endIndex + 1,
      startIndex,
      endIndex + 1
    );
  }
  return [null, null];
}

/**
 * @param {*} line
 * @param {*} lineAbove
 * @param {*} lineBelow
 * @param {*} currentPlace
 * @returns bool - if find symbol returns true
 */
function checkIndex(line, lineAbove, lineBelow, currentPLace) {
  if (lineAbove != null) {
    for (let i = currentPLace - 1; i <= currentPLace + 1; i++) {
      if (i >= 0 && i < lineAbove.length) {
        if (symbol.includes(lineAbove[i])) {
          // console.log(lineAbove[i]);
          return true;
        }
      }
    }
  }
  if (line != null) {
    for (let i = currentPLace - 1; i <= currentPLace + 1; i++) {
      if (i >= 0 && i < line.length) {
        if (symbol.includes(line[i])) {
          // console.log(line[i]);
          return true;
        }
      }
    }
  }
  if (lineBelow != null) {
    for (let i = currentPLace - 1; i <= currentPLace + 1; i++) {
      if (i >= 0 && i < lineBelow.length) {
        if (symbol.includes(lineBelow[i])) {
          // console.log(lineBelow[i]);
          return true;
        }
      }
    }
  }
  return false;
}
