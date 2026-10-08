// Create a function tuckIn that takes two arrays and insert the second array in the middle of the first array.

const tuckIn = ([a, b], c) => [a, ...c, b];

const outcome = tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);

console.log(outcome);
