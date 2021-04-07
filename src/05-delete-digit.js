/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = n.toString();
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    const elem = Number(a.substring(0, i) + a.substring(i + 1));
    if (max < elem) max = elem;
  }
  return max;
}

module.exports = deleteDigit;
