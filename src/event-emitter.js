export default (object = {}) => {
  const events = {}

  function on(name, handler) {
    events[name] = events[name] || []
    events[name].push(handler)
  }

  function off(name, handler = false) {
    const event = events[name]
    if (handler) event.splice(event.indexOf(handler), 1)
    else delete events[name]
  }

  function emit(name, ...args) {
    const evt = events[name]
    if (!evt) return
    evt.forEach(handler => handler.apply(this, args))
  }

  return Object.assign(object, {
    on,
    off,
    emit
  })
}
