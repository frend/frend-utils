import matches from './matches'

export default (el, selector) => {
  //  detect closest support and return native function
  if (typeof Element.prototype.closest === 'function') return el.closest(selector)
  //  if not supported, run fallback function
  let tempEl = el
  while (tempEl && tempEl.nodeType === 1) {
    if (matches(tempEl, selector)) return el
    tempEl = tempEl.parentNode
  }
  return null
}
