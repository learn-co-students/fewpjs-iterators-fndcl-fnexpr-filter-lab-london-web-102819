// Code your solution here
const findMatching = (drivers, str) => {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
};

const fuzzyMatch = (drivers, str) => {
    let initialLetters = str.length;
    return drivers.filter(driver => driver.substring(0,initialLetters) === str)
};


const matchName = (drivers, str) => {
    return drivers.filter(driver => driver.name === str)
}