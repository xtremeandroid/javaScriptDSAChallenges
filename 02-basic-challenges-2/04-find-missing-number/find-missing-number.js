function findMissingNumber(nums_arr) {
  if (nums_arr && nums_arr.length > 0) {
    const n = nums_arr.length + 1;

    const sum = (n * (n + 1)) / 2;
    let nums_arr_sum = 0;

    for (let i = 0; i < nums_arr.length; i++) {
      nums_arr_sum += nums_arr[i];
    }

    return sum - nums_arr_sum;
  }
  return undefined;
}

module.exports = findMissingNumber;
