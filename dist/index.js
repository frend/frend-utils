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

function emitter() {
  var object = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var events = {};

  function on(name, handler) {
    events[name] = events[name] || [];
    events[name].push(handler);
    // console.log(events);
    return this;
  }

  function emit(name) {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    // console.log(events);
    var evt = events[name];
    if (!evt) {
      return;
    }
    evt.forEach(function (handler) {
      handler.apply(_this, args);
    });
    return this;
  }

  return Object.assign(object, {
    on: on,
    emit: emit
  });
}

var nodelistArray = (function (el) {
  var ctx = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
  return [].slice.call(ctx.querySelectorAll(el));
});

export { closest, defer, emitter, nodelistArray as q };
