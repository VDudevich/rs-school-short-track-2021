/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let output = '';
  let temp = '';
  let k;
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    k = i + 1;
    while (str[k] === str[k - 1]) {
      count += 1;
      temp = `${count}${str[k]}`;
      k += 1;
    }
    if (temp === '') {
      output += str[i];
    } else {
      output += temp;
      temp = '';
    }
    i = k - 1;
    count = 1;
  }
  return output;
}

module.exports = encodeLine;
