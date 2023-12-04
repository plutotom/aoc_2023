const fs = require("fs");
const numObj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const reverseNumObj = {
  eno: 1,
  owt: 2,
  eerht: 3,
  ruof: 4,
  evif: 5,
  xis: 6,
  neves: 7,
  thgie: 8,
  enin: 9,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const dataIn = fs.readFileSync("in.txt", "utf8");
const test = fs.readFileSync("test.txt", "utf8");
let out = "";

out = dataIn.split("\n").map((line, index, arr) => {
  let firstNum = lowestNum(line, numObj);

  let lastNum = lowestNum(reverseString(line), reverseNumObj);
  firstNum;
  lastNum;
  return `${firstNum}${lastNum}`;
});
// oneoneone 11
// twoeightwo 22
// dkjfds3k355ds2 32
// onedsasdfa 11
// dskatwodsaksad 22
// threedsa5dsaf3 33
// eightwo 82
// fdsafdsafkdslajfklds 0
// 11 + 22 + 32 + 11 + 22 + 33 + 82 + 0 = 213
out;
out = out.reduce((arr, cur) => Number(arr) + Number(cur), 0);
out;

/**
 *
 * @param {string} line randome string of numbers and words
 * @returns first number in the string
 */
function lowestNum(line, numObj) {
  var lowestIndex = line.length + 1;
  var firstNum = "";

  Object.keys(numObj).map((word, index, arr) => {
    var temp = line.indexOf(String(word));
    if (temp < lowestIndex && temp >= 0) {
      lowestIndex = temp;
      firstNum = word;
    }
  });
  // return numObj[firstNum];
  return numObj[firstNum] === undefined ? "" : numObj[firstNum];
}

// part 1
// testArr = convertWordToNumber(testArr);
// out = processTestArr(testArr).reduce(
//   (arr, cur) => Number(arr) + Number(cur),
//   0
// );
// out;
// console.log(out); // 54878 is to low
// fs.writeFileSync("out.txt", String(out), "utf8");

// function processTestArr(testArr) {
//   testArr = testArr.map((stringRow, index, arr) =>
//     stringRow.split("").filter((value, index, arr) => Number(value))
//   );
//   return testArr.map((indArr) => {
//     // we need to only get the first and the last, but if there is only one number do not care
//     var smArr = [];
//     if (indArr.length > 1) {
//       let stringSum = indArr[0] + indArr.slice(-1);
//       smArr.push(indArr[0] + indArr.slice(-1));
//     } else if (indArr.length > 0) {
//       smArr.push(indArr[0] + indArr[0]);
//     }
//     return smArr.join("");
//   });
// }
// /**
//  *
//  * @param {string} word a string of the word you want a number
//  * @returns {number} an int
//  */
// function wordToNumber(word) {
//   const wordToNumObj = {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };
//   return wordToNumObj[word];
// }
// function convertWordToNumber(inArr) {
//   inArr;
// }
function reverseString(str) {
  return str.split("").reduce((acc, char) => char + acc, "");
}
