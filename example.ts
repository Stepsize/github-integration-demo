// TODO This can be make a lot more efficient
function uglyCode(arg1: any, arg2: any): any {
  if (typeof arg1 === "string") {
    if (typeof arg2 === "string") {
      // TODO We should fix this
    } else if (typeof arg2 === "number") {
      // do that
    } else {
      // do something else
    }
  } else if (typeof arg1 === "number") {
    // do yet another thing
  } else {
  }
}
