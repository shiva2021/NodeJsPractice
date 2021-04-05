const rl = require('readline');
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const { promisify } = require('util')

readline.question[promisify.custom] = (question) => {
  return new Promise((resolve) => {
    readline.question(question, resolve)
  })
}

let question = promisify(readline.question);

module.exports = { question, readline };