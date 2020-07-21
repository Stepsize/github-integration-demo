function uglyCode(arg1: any, arg2: any): any {
  if (typeof arg1 === 'string') {
    if (typeof arg2 === 'string') {
      // do this
    } else if (typeof arg2 === 'number') {
      // do that
    } else {
      // do something else
    }
  } else if (typeof arg1 === 'number') {
    // do yet another thing
  } else {
    // running out of ideas
  }
}
