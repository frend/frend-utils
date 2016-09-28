export default (el, selector) => {
  // update prototype to match browser vendors
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector
  // detect closest support and return native function
  if (typeof Element.prototype.closest === 'function') return el.closest(selector)
  // if not supported, run fallback function
  let tempEl = el
  while (tempEl && tempEl.nodeType === 1) {
    if (tempEl.matches(selector)) return el
    tempEl = tempEl.parentNode
  }
  return null
}
