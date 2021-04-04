let ascending = (array) => {
  return array.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0)
}

let descending = (array) => {
  return array.sort((a, b) => (a < b) ? 1 : (a > b) ? -1 : 0)
}

module.exports = { ascending, descending }