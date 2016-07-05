'use strict'

//  Cancel early
if (typeof Element.prototype.matches !== 'function') {
  //  Update prototype
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function (selector) {

    const el = this
    const elems = (el.document || el.ownerDocument).querySelectorAll(selector)
    let i = 0

    while (elems[i] && elems[i] !== el) ++i

    return Boolean(elems[i])
  }
}
