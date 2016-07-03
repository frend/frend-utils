// 'use strict'

// export default (el, ctx = doc) => {
//   return [].slice.call(ctx.querySelectorAll(el))
// }

module.exports = function (el, ctx) {
  return [].slice.call((ctx || document).querySelectorAll(el))
}