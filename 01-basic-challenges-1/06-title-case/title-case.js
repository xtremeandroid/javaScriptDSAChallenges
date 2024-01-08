function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  const words_arr = [];
  for (let i = 0; i < words.length; i++) {
    cap_word = words[i][0].toUpperCase() + words[i].slice(1);
    words_arr.push(cap_word);
  }
  return words_arr.join(" ");
}

module.exports = titleCase;
