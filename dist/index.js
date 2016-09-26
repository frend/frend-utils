var matches = function matches(el, selector) {
  // update prototype to match browser vendors
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector;
  // detect matches support and return native function
  if (typeof Element.prototype.matches === 'function') return el.matches(selector);
  // if not supported, run fallback function
  var elems = (el.document || el.ownerDocument).querySelectorAll(selector);
  var i = 0;
  while (elems[i] && elems[i] !== el) {
    ++i;
  }return Boolean(elems[i]);
};

var closest = function closest(el, selector) {
  // detect closest support and return native function
  if (typeof Element.prototype.closest === 'function') return el.closest(selector);
  // if not supported, run fallback function
  var tempEl = el;
  while (tempEl && tempEl.nodeType === 1) {
    if (matches(tempEl, selector)) return el;
    tempEl = tempEl.parentNode;
  }
  return null;
};

var defer = (function (fn) {
  //  defers invoking the function until the current call stack has cleared
  if (typeof fn === 'function') setTimeout(fn, 0);
});

var nodelistArray = (function (el) {
  var ctx = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
  return [].slice.call(ctx.querySelectorAll(el));
});

export { closest, defer, nodelistArray as q };
