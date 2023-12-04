// const stringArr = ["eightwotree"];
// const stringSingle = "eightwothree";
// const numbersAsWords = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];

// numbersAsWords.map((word, index, arr) => {
//   individuleVlaue = stringSingle.replaceAll(word, wordToNumber(word));
//   individuleVlaue
// });
// individuleVlaue;
// stringSingle;
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
// ---------------
// function convertTextToNumber(text) {
//   const numberMap = {
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

//   // Replace numeric words with their corresponding numbers
//   const replacedText = text.replace(
//     /\b(?:one|two|three|four|five|six|seven|eight|nine)\b/g,
//     (match) => numberMap[match]
//   );
// replacedText
//   // Split the replaced text into words
//   const words = replacedText.toLowerCase().match(/\w+/g);

//   // Convert words to numbers
//   const numbers = words.map((word) => {
//     const number = numberMap[word];
//     return number !== undefined ? number : word;
//   });

//   // Join the numbers back into a string
//   const result = numbers.join("");

//   return result;
// }

// // Example input
// const input = [
//   "two1nine",
//   "eightwothree",
//   "abcone2threexyz",
//   "xtwone3four",
//   "4nineeightseven2",
//   "zoneight234",
//   "7pqrstsixteen",
// ];

// // Convert text to numbers for each input string
// const convertedNumbers = input.map(convertTextToNumber);

// // Output the result
// console.log(`Converted numbers: ${convertedNumbers}`);
