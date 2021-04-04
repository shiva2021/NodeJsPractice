/** Problem Statement 
 * 
 * Given a number n find the number of pairs (x,y) 
 * where both x and y are less than n and highest common 
 * factor (hcf) of x and y is 1
 * 
*/

let question = require('../assets/readline-async-question');

module.exports = async () => {
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