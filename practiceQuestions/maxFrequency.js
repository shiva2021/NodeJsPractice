let { question, readline } = require('../assets/readline-async-question');

module.exports = async () => {
  let answer = await question('Enter the array: ');
  arr = answer.split(" ");
  let newArr = [];
  if (arr && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      var el = arr[i]
      var b = arr.filter((d) => el === d);
      newArr.push({ el: el, frequency: b.length })
    }

    newArr = [...new Set(newArr)];
    newArr = newArr.sort((a, b) =>
      (a.frequency < b.frequency) ? 1 : (a.frequency > b.frequency) ? -1 : 0
    )
    if (newArr.length > 0 && newArr[0].frequency) console.log(`The max frequency is ${newArr[0].frequency}`)
  }
}