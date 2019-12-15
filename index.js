// Code your solution here

function findMatching(drivers, string) {
    let array = drivers.filter(n => {
        return n.toUpperCase() === string.toUpperCase();
    });
    return array;
}

function fuzzyMatch(drivers, string) {

    let array = drivers.filter(n => {
        return n.startsWith(string);
    });
    return array;

}

function matchName(drivers, string) {
    let array = drivers.filter(n => {
        return n.name === string;
    });
    return array;


}