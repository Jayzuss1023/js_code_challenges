// Create a function binary that returns a base-2 (binary) representation of a base-10 (decimal) string number.

function binary(decimal) {
  return decimal.toString(2);
}

const outcome = binary(100);
console.log(outcome);
