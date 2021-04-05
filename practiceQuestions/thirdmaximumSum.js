/** Problem Statement 
 * Given a set of integers, find the third maximum sum of two elements from the set.
 * For ex – Array -> 3,6,2,7,8,19,13,5
 * Max Sum of two elements is – 19 + 13 = 32 , So u need to find the third maximum sum.
 * 
*/

let { question, readline } = require('../assets/readline-async-question');

module.exports = async () => {
  let answer = await question('Enter the integers (e.g.: 1 2 3 4 5 6): ');
  let arr = answer.split(' ');
  arr = arr.map(d => parseInt(d))
  arr.sort((a, b) => (a < b) ? 1 : (a > b) ? -1 : 0);
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    let second = arr[i + 1] ? arr[i + 1] : 0
    sum.push(first + second)
  }
  console.log(sum)
  sum = [...new Set(sum)];

  console.log(sum)

  if (sum.length > 3) console.log(`The third largest sum is ${sum[2]}`)
}