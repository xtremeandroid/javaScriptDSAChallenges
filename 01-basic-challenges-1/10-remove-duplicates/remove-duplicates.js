function removeDuplicates(arr) {
  const set = new Set();
  arr.forEach((item) => {
    if (!set.has(item)) {
      set.add(item);
    }
  });
  return [...set];
}

module.exports = removeDuplicates;
