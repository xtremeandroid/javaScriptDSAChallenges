function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
