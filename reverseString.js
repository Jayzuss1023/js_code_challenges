// Create a function reverseString that takes in a string and returns the string reversed.

function reverseString(str) {
  return str.split("").reverse().join("");
}

const outcome = reverseString("hello");

console.log(outcome);
