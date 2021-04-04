const rl = require('readline');
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
const { promisify } = require('util');

readline.question[promisify.custom] = (question) => {
  return new Promise((resolve) => {
    readline.question(question, resolve);
  });
};

let question = promisify(readline.question);

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  try {
    const answer = await question('Which test do you want to trigger? ');
    switch (answer) {
      case "findSecondLargest":
        console.log(`${answer} has started!!.. :) `)
        let findSecondLargest = require('./practiceQuestions/secondLargestNum');
        findSecondLargest(1)
        break;

      case "countDecodings":
        let countDecodings = require('./practiceQuestions/countDecoding')
        countDecodings(2)
        break;

      case "findCoPrimes":
        let findCoPrimes = require('./practiceQuestions/findCoPrimes');
        findCoPrimes(3)
        break

      default:
        break;
    }
  } catch (err) {
    console.error('Error Occured!', err);
    readline.close()
  }
})();