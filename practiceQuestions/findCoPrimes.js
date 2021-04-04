let question = require('../assets/readline-async-question');

async function findCoPrimes() {
  let answer = await question("Let's find the co-prime numbers. Enter a number: ")
  if (answer) {
    let number = parseInt(answer);

    for (let i = 1; i <= number; i++) {

      let x = Math.floor(Math.random() * number);
      let y = Math.floor(Math.random() * number);

      let smaller = x > y ? y : x;

      for (let j = 2; j < smaller; j++) {
        if (x % j == 0 && y % j == 0) {
          console.log(`${x},${y} are not co-primes`)
          return false;
        }
      }

      console.log(`${x},${y} are co-primes`)
    }

  }
}

module.exports = findCoPrimes;