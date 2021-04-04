let question = require('../assets/readline-async-question');
let { descending } = require('../assets/sort');

module.exports = async () => {
  let answer = await question("Enter an array of numbers and I will find the second largest number for you: ");
  if (answer) {
    let strArr = answer.split(" ");
    let numArr = strArr.map((a) => parseFloat(a));

    /** remove the duoplicates */
    numArr = [...new Set(numArr)]

    /** sorted descending */
    numArr = descending(numArr)

    if (numArr[1]) console.log('The second largest num is ' + numArr[1]);
  }
}