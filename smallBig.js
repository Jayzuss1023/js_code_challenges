// Create a function smallBig that takes an array of numbers and, in order, returns both the min and max numbers.
const sampleArray = [1, 2, 3, 4, 5, 8];
function smallBig(array) {
  return [Math.min(...array), Math.max(...array)];
}

const smallBigRun = smallBig(sampleArray);
console.log(smallBigRun);
