function reverseString(str) {
  return str.split("").reduce((acc, char) => char + acc, "");
}
export { reverseString };
