function displayLikes(names_arr) {
  if (names_arr.length === 0) {
    return "no one likes this";
  } else if (names_arr.length === 1) {
    return `${names_arr[0]} likes this`;
  } else if (names_arr.length === 2) {
    return `${names_arr[0]} and ${names_arr[1]} like this`;
  } else if (names_arr.length === 3) {
    return `${names_arr[0]}, ${names_arr[1]} and ${names_arr[2]} like this`;
  } else {
    return `${names_arr[0]}, ${names_arr[1]} and ${
      names_arr.length - 2
    } others like this`;
  }
}

module.exports = displayLikes;
