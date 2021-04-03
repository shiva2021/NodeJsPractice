const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function countDecoding() {
  r1.on('line', (data) => {
    let arr = data.split('');
    //1234
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i + 1] ? arr[i] + arr[i + 1] : 100;
      if (parseInt(word) < 27) {
        count += 1;
      }
    }
    console.log(count + 1)
  })
}

module.exports = countDecoding