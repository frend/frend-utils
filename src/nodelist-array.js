// convert nodelist into array
export default (el, ctx = document) => [].slice.call(ctx.querySelectorAll(el))
