function reverseString(str) {
  const arr = str.split("");
  const rev_arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev_arr.push(arr[i]);
  }
  return rev_arr.join("");
}

module.exports = reverseString;
