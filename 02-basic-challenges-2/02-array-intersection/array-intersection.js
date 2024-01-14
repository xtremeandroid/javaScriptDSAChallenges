function arrayIntersection(arr1, arr2) {
  const arr1_set = new Set();
  const same_elements_arr = [];

  for (const item of arr1) {
    arr1_set.add(item);
  }

  for (const item of arr2) {
    if (arr1_set.has(item)) {
      same_elements_arr.push(item);
    }
  }

  return same_elements_arr;
}

module.exports = arrayIntersection;
