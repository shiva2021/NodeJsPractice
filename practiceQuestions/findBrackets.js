let { question, readline } = require('../assets/readline-async-question');

module.exports = async () => {
  let answer = await question('Enter the string: ');
  let arr = answer.split('');
  let map = {
    '{': '}',
    '[': ']',
    '(': ')',
    '<': '>'
  };

  let specialChar = ['[', '{', '(', '<']
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    let second = arr[i + 1] ? arr[i + 1] : '';
    if (specialChar.includes(first) && second && second === map[first]) {
      console.log(`pair found for==> ${first}, ${second}`);
      count += 1;
    }
  }

  console.log(`We have ${count} paired brackets`);

  readline.close()
}