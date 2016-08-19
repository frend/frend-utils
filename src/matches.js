export default (el, selector) => {
  //  update prototype to match browser vendors
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.mozMatchesSelector ||
                              Element.prototype.webkitMatchesSelector
  //  detect matches support and return native function
  if (typeof Element.prototype.matches === 'function') return el.matches(selector)
  //  if not supported, run fallback function
  const elems = (el.document || el.ownerDocument).querySelectorAll(selector)
  let i = 0
  while (elems[i] && elems[i] !== el) ++i
  return Boolean(elems[i])
}
