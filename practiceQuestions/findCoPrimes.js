const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
let name = "findCoPrimes";
function findCoPrimes() {
  r1.question("Let's find the co-prime numbers. Enter a number: ", (str) => {
    if (str && str !== name) {
      let number = parseInt(str);

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

        console.log(`This is the log from count Decoding program: ${x},${y} are co-primes`)
      }
    }
  })
}

module.exports = findCoPrimes;