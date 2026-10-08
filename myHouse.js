// Create a function myHouse that takes a number (step) and returns the total number of matchsticks in that step.
// Each house has a total of 6 sides. 2 houses will have 11 sides total. 3 houses will have 16 sides

function myHouse(houses) {
  if (houses == 0) {
    return 0;
  } else {
    return houses * 6 - (houses - 1);
  }
}

const outcome = myHouse(87);

console.log(outcome);
