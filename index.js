// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    let letterCount = string.length;
    return drivers.filter(driver => {
        return driver.substring(0, letterCount) === string
    })
}

function matchName(drivers, string) {
    return drivers.filter( driver => {
        return driver.name === string
    })
}