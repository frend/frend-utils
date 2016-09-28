var closest = (function (el, selector) {
  // update prototype to match browser vendors
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  // detect closest support and return native function
  if (typeof Element.prototype.closest === 'function') return el.closest(selector);
  // if not supported, run fallback function
  var tempEl = el;
  while (tempEl && tempEl.nodeType === 1) {
    if (tempEl.matches(selector)) return el;
    tempEl = tempEl.parentNode;
  }
  return null;
});

//  defers invoking the function until the current call stack has cleared
var defer = (function (fn) {
  return typeof fn === 'function' && setTimeout(fn, 0);
});

var eventEmitter = (function () {
  var object = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var events = {};

  function on(name, handler) {
    events[name] = events[name] || [];
    events[name].push(handler);
  }

  function off(name) {
    var handler = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    var event = events[name];
    if (handler) event.splice(event.indexOf(handler), 1);else delete events[name];
  }

  function emit(name) {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var evt = events[name];
    if (!evt) return;
    evt.forEach(function (handler) {
      return handler.apply(_this, args);
    });
  }

  return Object.assign(object, {
    on: on,
    off: off,
    emit: emit
  });
});

// convert nodelist into array
var nodelistArray = (function (el) {
  var ctx = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
  return [].slice.call(ctx.querySelectorAll(el));
});

export { closest, defer, eventEmitter as emitter, nodelistArray as q };
