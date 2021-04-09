/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {};
  const result = {};
  domains.forEach((elem) => {
    const temp = elem.split('.').reverse();
    let str = '';
    const subdns = temp.map((el) => {
      str += `.${el}`;
      return str;
    });
    for (let i = subdns.length - 1; i >= 0; i--) {
      if (subdns[i] in result) {
        ++result[subdns[i]];
      } else {
        result[subdns[i]] = 1;
      }
    }
  });
  return result;
}

module.exports = getDNSStats;
