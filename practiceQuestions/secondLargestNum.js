function findSecondLargest(code) {
  let rl = require('readline');

  let readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })

  let name = "findSecondLargest"

  readline.question("Enter an array of numbers and I will find the second largest number for you: ", (data) => {
    if (data && data !== name) {
      let strArr = data.split(" ");
      let numArr = strArr.map((a) => parseFloat(a));

      numArr = [...new Set(numArr)]
      /** sorted descending */
      numArr.sort((a, b) => (a < b) ? 1 : (a > b) ? -1 : 0)

      /** sorted ascending */
      // numArr.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0)

      if (numArr[1]) console.log('The second largest num is ' + numArr[1]);
    }
  })

}
module.exports = findSecondLargest