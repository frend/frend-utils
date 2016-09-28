//  defers invoking the function until the current call stack has cleared
export default (fn) => typeof fn === 'function' && setTimeout(fn, 0)
