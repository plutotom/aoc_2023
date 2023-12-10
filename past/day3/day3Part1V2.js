const fs = require("fs");

// const { reverseString } = require("./utils/utils.js");
const dataIn = fs.readFileSync("in.txt", "utf8");
let dataTest = fs.readFileSync("test.txt", "utf8");
const symbol = ["*", "*", "%", "-", "#", "=", "@", "$", "/", "+", "&"];
var matrix = [];

var data = dataIn.split("\n");
data.map((row, i, data) => {
  for (var j = 0; j < row.length; j++) {
    if (!isNaN(parseInt(row[j]))) {
      var [wholeNum, nextIndex] = getFullNum(data, row, i, j);
      matrix.push(wholeNum);
      j = nextIndex;
    }
  }
});

function getFullNum(data, row, rowIndex, charIndex) {
  var startIndex = charIndex;
  var endIndex = charIndex;
  var tempMatrix = [];

  function addSurroundingElements(i, j) {
    // Top
    if (data[i - 1] !== undefined && data[i - 1][j] !== undefined) {
      tempMatrix.push(data[i - 1][j]);
    }
    // Bottom
    if (data[i + 1] !== undefined && data[i + 1][j] !== undefined) {
      tempMatrix.push(data[i + 1][j]);
    }
    // Left
    if (data[i][j - 1] !== undefined) {
      tempMatrix.push(data[i][j - 1]);
    }
    // Right
    if (data[i][j + 1] !== undefined) {
      tempMatrix.push(data[i][j + 1]);
    }
    // Top left
    if (data[i - 1] !== undefined && data[i - 1][j - 1] !== undefined) {
      tempMatrix.push(data[i - 1][j - 1]);
    }
    // Top right
    if (data[i - 1] !== undefined && data[i - 1][j + 1] !== undefined) {
      tempMatrix.push(data[i - 1][j + 1]);
    }
    // Bottom left
    if (data[i + 1] !== undefined && data[i + 1][j - 1] !== undefined) {
      tempMatrix.push(data[i + 1][j - 1]);
    }
    // Bottom right
    if (data[i + 1] !== undefined && data[i + 1][j + 1] !== undefined) {
      tempMatrix.push(data[i + 1][j + 1]);
    }
  }
  while (endIndex < row.length - 1 && !isNaN(parseInt(row[endIndex + 1]))) {
    console.log(parseInt(row[endIndex + 1]));
    addSurroundingElements(rowIndex, endIndex);
    tempMatrix;
    endIndex++;
  }
  // Add surrounding elements for the last valid endIndex
  addSurroundingElements(rowIndex, endIndex);

  while (startIndex > 0 && !isNaN(parseInt(row[startIndex - 1]))) {
    addSurroundingElements(rowIndex, startIndex);
    startIndex--;
  }
  // Add surrounding elements for the last valid endIndex
  addSurroundingElements(rowIndex, endIndex);

  wholeNum = row.slice(startIndex, endIndex + 1);
  console.log(tempMatrix);
  startIndex;
  endIndex;
  console.log(wholeNum);
  if (symbol.some((sym) => tempMatrix.includes(sym))) {
    return [wholeNum, endIndex];
  } else {
    return [0, endIndex];
  }
}
console.log(matrix);
let out = matrix.reduce((acc, curr) => {
  return parseInt(acc) + parseInt(curr);
});

// test num should be // 1,249
out; // old num is 595217
//===================================How GPT thinks I should do it... I like it better. I do really like the getSurroundingElements Function=========================================================================
// const fs = require("fs");

// const dataIn = fs.readFileSync("in.txt", "utf8");
// const symbol = ["*", "*", "%", "-", "#", "=", "@", "$", "/", "+", "&"];
// const data = dataIn.split("\n");

// function getSurroundingElements(data, i, j) {
//   const directions = [
//     [-1, 0], // Top
//     [1, 0], // Bottom
//     [0, -1], // Left
//     [0, 1], // Right
//     [-1, -1], // Top left
//     [-1, 1], // Top right
//     [1, -1], // Bottom left
//     [1, 1], // Bottom right
//   ];

//   return directions
//     .map(([dx, dy]) =>
//       data[i + dx] && data[i + dx][j + dy] !== undefined
//         ? data[i + dx][j + dy]
//         : null
//     )
//     .filter(Boolean);
// }

// function getFullNum(data, row, rowIndex, charIndex) {
//   let startIndex = charIndex;
//   let endIndex = charIndex;

//   while (endIndex < row.length - 1 && !isNaN(parseInt(row[endIndex + 1]))) {
//     endIndex++;
//   }

//   while (startIndex > 0 && !isNaN(parseInt(row[startIndex - 1]))) {
//     startIndex--;
//   }

//   const wholeNum = row.slice(startIndex, endIndex + 1);
//   const surroundingElements = [...Array(endIndex - startIndex + 1).keys()].map(
//     (i) => getSurroundingElements(data, rowIndex, startIndex + i)
//   );

//   if (surroundingElements.some((el) => symbol.includes(el))) {
//     return [wholeNum, endIndex];
//   } else {
//     return [0, endIndex];
//   }
// }

// const matrix = data.flatMap((row, i) => {
//   const numbers = [];
//   for (let j = 0; j < row.length; j++) {
//     if (!isNaN(parseInt(row[j]))) {
//       const [wholeNum, nextIndex] = getFullNum(data, row, i, j);
//       numbers.push(wholeNum);
//       j = nextIndex;
//     }
//   }
//   return numbers;
// });

// const out = matrix.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);

// console.log(out);
