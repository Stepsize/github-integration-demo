/**
 * TODO: This should be refactored completely. It's causing a lot of
 * development pain and slowing us down.
 */
function someCrazyLogic(arg1: any, arg2: any): any {
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
