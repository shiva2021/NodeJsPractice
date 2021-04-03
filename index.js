/** Test#1: Find the second largest number! */
let findSecondLargest = require('./practiceQuestions/secondLargestNum');
// findSecondLargest();


/** Test#2: Count Possible Decodings of a given Digit Sequence  */
let countDecodings = require('./practiceQuestions/countDecoding')

// countDecodings();

/** Test 3: Given a number n find the number of pairs (x,y) where both x and y are less than n and highest common factor (hcf) of x and y is 1 */
let findCoPrimes = require('./practiceQuestions/findCoPrimes');
// findCoPrimes();

const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

r1.question('Which test do you wish to trigger? ', (answer) => {
  switch (answer) {
    case "findSecondLargest":
      findSecondLargest()
      break;

    case "countDecodings":
      countDecodings()
      break;

    case "findCoPrimes":
      findCoPrimes()
      break

    default:
      break;
  }
})