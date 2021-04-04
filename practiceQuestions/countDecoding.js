const rl = require('readline');

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

let name = "countDecoding"

function countDecoding() {
  readline.question('Enter a number for which want to find the number of possible decodings: ', (data) => {
    if (data && data !== name) {
      let arr = data.split('');
      //1234
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        let word = arr[i + 1] ? arr[i] + arr[i + 1] : 100;
        if (parseInt(word) < 27) {
          count += 1;
        }
      }
      console.log("This is the log from count Decoding program: " + count + 1)
    }
  })
}

module.exports = countDecoding