'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var closest = (function (el, selector) {
  var matches = function matches(matchEl, matchSelector) {
    // update prototype to match browser vendors
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector;
    // detect matches support and return native function
    if (typeof Element.prototype.matches === 'function') return matchEl.matches(matchSelector);
    // if not supported, run fallback function
    var elems = (matchEl.document || matchEl.ownerDocument).querySelectorAll(matchSelector);
    var i = 0;
    while (elems[i] && elems[i] !== matchEl) {
      ++i;
    }return Boolean(elems[i]);
  };
  // detect closest support and return native function
  if (typeof Element.prototype.closest === 'function') return el.closest(selector);
  // if not supported, run fallback function
  var tempEl = el;
  while (tempEl && tempEl.nodeType === 1) {
    if (matches(tempEl, selector)) return el;
    tempEl = tempEl.parentNode;
  }
  return null;
});

var defer = (function (fn) {
  //  defers invoking the function until the current call stack has cleared
  if (typeof fn === 'function') setTimeout(fn, 0);
});

var nodelistArray = (function (el) {
  var ctx = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
  return [].slice.call(ctx.querySelectorAll(el));
});

exports.closest = closest;
exports.defer = defer;
exports.q = nodelistArray;
