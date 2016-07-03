// 'use strict'

// export default (fn) => {
//   return typeof fn === 'function' && setTimeout(fn, 0)
// }

module.exports = function (fn) {
  return (typeof fn === 'function') && setTimeout(fn, 0)
}