const fs = require("fs");
// const { reverseString } = require("./utils/utils.js");
const colors = ["blue", "green", "red"];
const dataIn = fs.readFileSync("in.txt", "utf8");
let dataTest = fs.readFileSync("test.txt", "utf8");
data = dataIn.split("\n");
var score = 0;
// get all numbers between : and | to make winning numbers -> then get all my numbers after | -> then compare winning nums
data.map((row, i, data) => {
  console.log(row);
  [winningNums, myNums] = row.split(":")[1].split("|");
  myNums = myNums.split(" ").filter(Number);
  winningNums = winningNums.split(" ").filter(Number);

  var myWinningNums = [];
  var tempScore = 0;
  // push any of myNums that are in the winning nums array
  myNums.forEach((myNum, index, arr) => {
    if (winningNums.includes(myNum)) {
      if (tempScore <= 0) tempScore++;
      else {
        tempScore = tempScore * 2;
      }
    }
  });
  score += tempScore;
});
score;
// score = score.reduce((arr, cur) => parseInt(arr) + parseInt(cur));
