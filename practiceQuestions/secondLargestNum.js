function findSecondLargest() {
  let readline = require('readline');

  let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  r1.on("line", (data) => {
    if (data) {
      let strArr = data.split(" ");
      let numArr = strArr.map((a) => parseFloat(a));
      /** sorted descending */
      numArr.sort((a, b) => (a < b) ? 1 : (a > b) ? -1 : 0)

      /** sorted ascending */
      // numArr.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0)

      console.log('The second largest num is ' + numArr[1]);
    }
  })

}
module.exports = findSecondLargest