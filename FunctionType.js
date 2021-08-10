// Fungsi pada TypeScript sama hal-nya dengan fungsi pada
// pada javascript tapi bedanya pada fungsi type script
// kita dapat menaruh type annotations pada parameter fungsi
// atauupun return type pada fungsi yang kita tulis
function sumOfVariable(a, b) {
    return a + b;
}
console.log(sumOfVariable(2, 3));
/**
 * Type Function
 * 1. Named function
 * 2. Anonimous function
 * 3. Arrow function
*/
// 1. Named function
function greeatName(name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
}
console.log(greeatName("Bahri"));
// 2. Anonymous function
var greeetName2 = function (name) {
    if (name) {
        return +name + " hallo";
    }
    else {
        return null;
    }
};
// console.log(greeetName2("Bahrul"))
console.log(greeetName2(4));
// 3.
var greetNameArrowFunc = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi!";
    }
};
console.log(greetNameArrowFunc("Alam"));
// Void: 
function printUserName(userName) {
    console.log(userName);
}
printUserName('Developer');
