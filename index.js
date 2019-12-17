const findMatching = (drivers, string) => {
  return drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(driver => driver.startsWith(string))
}

const matchName = (drivers, string) => {
  return drivers.filter(driver => driver.name === string)
}