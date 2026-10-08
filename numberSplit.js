// Create a function split that, when given an integer number, returns an array containing the two halves of the number.
// If the number is odd, make the rightmost number higher. You can even expect negative numbers.

function numberSplit(number) {
  return [Math.floor(number / 2), Math.ceil(number / 2)];
}

const outcome = numberSplit(4);

console.log(outcome);
