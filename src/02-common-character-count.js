/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a = [];
  let b = '';
  if (s1.length <= s2.length) {
    a = s1.split('');
    b = s2;
  } else {
    a = s2.split('');
    b = s1;
  }
  const result = a.filter((elem) => {
    if (b.includes(elem)) {
      b = b.slice(0, b.indexOf(elem)) + b.slice(b.indexOf(elem) + 1);
      return elem;
    }
    return false;
  }).length;
  return result;
}

module.exports = getCommonCharacterCount;
