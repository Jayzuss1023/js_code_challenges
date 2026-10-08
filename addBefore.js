// Create a function addBefore that takes any number as an argument.
// The function should then add up all the numbers from 1 to the number you passed in the function.
function addBefore(num) {
  if (num == 1) return 1;
  return num + addBefore(num - 1);
}

const summed = addBefore(5);
console.log(summed);
