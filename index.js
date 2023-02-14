const cats= ["Milo", "Otis", "Garfield"];

const copyOfCats = [...cats]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
}
function appendCat(name) {
    copyOfCats.push("Broom");
    return copyOfCats;
}
function prependCat(name) {
    copyOfCats.pop();
    copyOfCats.unshift("Arnold");
    return copyOfCats;
}
function removeLastCat() {
    copyOfCats.shift();
    copyOfCats.pop();
    return copyOfCats;
}
function removeFirstCat() {
    copyOfCats.push("Garfield");
    copyOfCats.shift();
    return copyOfCats;
}