/** Problem Statement:
 * 
 * Given an array of integers, our task is to write a 
 * program that efficiently finds the second largest 
 * element present in the array.
 * 
 */

let { question, readline } = require('../assets/readline-async-question');
let { descending } = require('../assets/sort');

module.exports = async () => {
  let answer = await question("Enter an array of numbers and I will find the second largest number for you: ");
  if (answer) {
    let strArr = answer.split(" ");
    let numArr = strArr.map((a) => parseFloat(a));

    /** sort and remove the duplicates */
    numArr = descending([...new Set(numArr)]);

    if (numArr[1]) console.log('The second largest num is ' + numArr[1]);
  }
}