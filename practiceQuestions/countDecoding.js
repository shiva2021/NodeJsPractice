/** Problem Statement 
 * 
 * Let 1 represent ‘A’, 2 represents ‘B’, etc. 
 * Given a digit sequence, count the number of 
 * possible decodings of the given digit sequence. 
 * 
*/

let question = require('../assets/readline-async-question');

module.exports = async () => {
  let answer = await question('Enter a number for which want to find the number of possible decodings: ')
  if (answer) {
    let arr = answer.split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i + 1] ? arr[i] + arr[i + 1] : 100;
      if (parseInt(word) < 27) {
        count += 1;
      }
    }
    console.log(`You're gonna have ${count + 1} decodings for ${answer}`)
  }
}

