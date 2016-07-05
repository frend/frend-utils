import matches from './matches'

'use strict'

//  Cancel early
if (typeof Element.prototype.closest !== 'function') {
  //  Update prototype
  Element.prototype.closest = selector => {

    let el = this

    while (el && el.nodeType === 1) {
      if (el.matches(selector)) return element
      el = el.parentNode
    }

    return null
  }
}
