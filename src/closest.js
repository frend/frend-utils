
export default (el, selector) => {
  const matches = (matchEl, matchSelector) => {
    // update prototype to match browser vendors
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.mozMatchesSelector ||
                                Element.prototype.webkitMatchesSelector
    // detect matches support and return native function
    if (typeof Element.prototype.matches === 'function') return matchEl.matches(matchSelector)
    // if not supported, run fallback function
    const elems = (matchEl.document || matchEl.ownerDocument).querySelectorAll(matchSelector)
    let i = 0
    while (elems[i] && elems[i] !== matchEl) ++i
    return Boolean(elems[i])
  }
  // detect closest support and return native function
  if (typeof Element.prototype.closest === 'function') return el.closest(selector)
  // if not supported, run fallback function
  let tempEl = el
  while (tempEl && tempEl.nodeType === 1) {
    if (matches(tempEl, selector)) return el
    tempEl = tempEl.parentNode
  }
  return null
}
