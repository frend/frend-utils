export default (fn) => {
  //  defers invoking the function until the current call stack has cleared
  if (typeof fn === 'function') setTimeout(fn, 0)
}
