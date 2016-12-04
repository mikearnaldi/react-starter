const choose = (value, minimum = 0) => {
  if (Math.abs(value - minimum) < 1) {
    return minimum
  }
  return Math.ceil(value)
}

export {choose}
