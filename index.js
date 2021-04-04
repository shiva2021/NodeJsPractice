const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

const choices = () => {
  return [
    'secondLargestNum',
    'countDecoding',
    'findCoPrimes',
    'maxFrequency'
  ]
}

(async () => {
  try {
    let questions = [{
      type: 'list',
      message: 'Which test do you want to trigger? ',
      choices: choices,
      name: 'selectedOption'
    }]

    prompt(questions).then((answer) => {
      let program = require(`./practiceQuestions/${answer.selectedOption}`);
      if (program) program()
    }).catch(err => console.log(err))

  } catch (err) {
    console.error('Error Occured!', err);
    readline.close()
  }
})();