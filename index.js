// Code your solution here

const findMatching = (drivers, str) => {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
};


const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => driver[0] === string[0])
}



const matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name === string)
}