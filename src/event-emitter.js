export default function emitter(object = {}) {
  const events = {}

  function on(name, handler) {
    events[name] = events[name] || []
    events[name].push(handler)
    // console.log(events);
    return this
  }

  function emit(name, ...args) {
    // console.log(events);
    const evt = events[name]
    if (!evt) {
      return
    }
    evt.forEach(handler => {
      handler.apply(this, args)
    })
    return this
  }

  return Object.assign(object, {
    on,
    emit
  })
}
