// Create a function potatoCount that returns the number of “potato” in any given str

// Test.(potatoCount("potato"), 1)
// Test.(potatoCount("potatopotatocherry"),2 )
// Test.(potatoCount("potatopotatopotatoorange"), 3)
// Test.(potatoCount("potatopotatobananapotatopotato"), 4)
// Test.(potatoCount("potatopotatomangopotatopotatopotato"), 5)
// Test.(potatoCount("potatocucumberpotatopotatopotatopotatopotato"), 6)

function potatoCount(str) {
  const arr = str.split("potato");
  return arr.length - 1;
}

const outcome = potatoCount("potatocucumberpotatopotatopotatopotatopotato");
console.log(outcome);

const potatoCount2 = (s) => s.match(/potato/g).length;

const outcome2 = potatoCount2("potatocucumberpotatopotatopotatopotatopotato");
console.log(outcome2);
