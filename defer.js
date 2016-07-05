'use strict'

export default (fn) => {
  return typeof fn === 'function' && setTimeout(fn, 0)
}
