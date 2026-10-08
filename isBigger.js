// Create a function isBigger that will pass two functions, first and second, that don't take any parameters,
// and return a string which indicates which function returned the larger number.

function isBigger(first, second) {
  return first() > second() ? "First" : second() > first() ? "Second" : "Both";
}

const outcome = isBigger(
  () => 10,
  () => 6,
);

console.log(outcome);
