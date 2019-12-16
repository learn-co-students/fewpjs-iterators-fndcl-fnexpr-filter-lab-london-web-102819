// Code your solution here

function findMatching(drivers, name) {
    const match = RegExp(`^${name}`, "i");
    return drivers.filter(d => match.exec(d));
}

function fuzzyMatch(drivers, name) {
    return findMatching(drivers, name);
}

function matchName(drivers, name) {
    const match = RegExp(`^${name}`, "i");
    return drivers.filter(d => match.exec(d.name));
}   