// Create a function concatenate that concatenates n input arrays, where n is variable.
// The arrays should be concatenated in order of the arguments.
const array1 = [1, 2, 3];
const array2 = [4, 5];
const array3 = [1, 2, 3, 4, 5, 6, 7];

function concatenate(...args) {
  return [].concat(...args);
}

const outcome = concatenate(array1, array2, array3);

console.log(outcome);
