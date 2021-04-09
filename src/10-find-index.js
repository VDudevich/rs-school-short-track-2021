/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let index;
  let middle;
  while (start <= end) {
    index = Math.round((start + end) / 2);
    middle = array[index];
    if (middle === value) return index;
    if (middle < value) {
      start = index + 1;
    } else {
      end = index - 1;
    }
  }
  return 'Not found';
}

module.exports = findIndex;
