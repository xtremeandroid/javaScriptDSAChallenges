function isPalindrome(str) {
  org_str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  reverse_str = org_str.split("").reverse().join("");
  console.log(reverse_str);
  return org_str === reverse_str;
}

module.exports = isPalindrome;
