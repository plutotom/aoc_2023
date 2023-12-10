// only 12 red cubes, 13 green cubes, and 14 blue cubes?
const fs = require("fs");
// const { reverseString } = require("./utils/utils.js");
const colors = ["blue", "green", "red"];
const dataIn = fs.readFileSync("in.txt", "utf8");
let dataTest = fs.readFileSync("test.txt", "utf8");

data = dataIn.split("\n");
let gameIds = getGameIds(data);
gameIds;
let goodGame = [];
let badGame = [];
const gameMax = {
  blue: 14,
  green: 13,
  red: 12,
};
let gameScores = data.map((game, gameIndex, gamesArr) => {
  let gameColors = {
    green: 0,
    blue: 0,
    red: 0,
  };
  // looping though three colors
  colors.forEach((colors, index, arr) => {
    var lastIndex = 3;
    // loop until indexOf returns -1
    let tempGame = game;
    colorIndex = tempGame.indexOf(colors);

    while (colorIndex >= 0) {
      console.log(parseColorNumber(colorIndex, tempGame));
      if (parseColorNumber(colorIndex, tempGame) > gameMax[colors]) {
        if (!badGame.includes(gameIds[gameIndex]))
          badGame.push(gameIds[gameIndex]);
      }

      tempGame = tempGame.slice(colorIndex + 1);
      colorIndex = tempGame.indexOf(colors);
    }
  });

  // console.log(gameColors.blue);
  // console.log(gameColors.red);
  // console.log(gameColors.green);

  // console.log(gameMax.blue);
  // console.log(gameMax.red);
  // console.log(gameMax.green);
});
goodGame;
badGame;
gameIds.forEach((gameId) => {
  gameId;
  if (!badGame.includes(gameId)) {
    goodGame.push(gameId);
  }
});
goodGame = goodGame.reduce((acc, curr) => acc + curr, 0);
goodGame; // old is 839

function getGameIds(data) {
  gId = [];
  data.map((line, index, arr) => {
    let eIndex = line.indexOf("e");
    let otherIndex = line.indexOf(":");

    let gameId = parseInt(line.slice(eIndex + 1, otherIndex));
    gId.push(gameId);
  });
  return gId;
}
function parseColorNumber(colorIndex, splicedGame) {
  let checkIndex = colorIndex - 2;
  numberToReturn = 0;
  multiplicationFactor = 1;
  do {
    console.log(parseInt(splicedGame[checkIndex]));
    tempNum = parseInt(splicedGame[checkIndex]);
    tempNum;
    numberToReturn = numberToReturn + tempNum * multiplicationFactor;
    multiplicationFactor = multiplicationFactor * 10;
    checkIndex -= 1;
  } while (!isNaN(splicedGame[checkIndex]) && splicedGame[checkIndex] !== " ");
  checkIndex;
  console.log(numberToReturn);

  return numberToReturn;
}
