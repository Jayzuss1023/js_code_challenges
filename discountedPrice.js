// Create a function discountedPrice(price, discount) that takes two arguments:
// the original price and the discount percentage as integers and returns the final discounted price.

function discountedPrice(price, discount) {
  discounted = price * discount;
  return price - discounted;
}

const outcome = discountedPrice(15, 0.15);

console.log(outcome);
