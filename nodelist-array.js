'use strict'

export default (el, ctx = document) => {
  return [].slice.call(ctx.querySelectorAll(el))
}
