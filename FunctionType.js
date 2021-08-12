// Fungsi pada TypeScript sama hal-nya dengan fungsi pada
// pada javascript tapi bedanya pada fungsi type script
// kita dapat menaruh type annotations pada parameter fungsi
// ataupun return type pada fungsi yang kita tulis
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
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
logDetails(1221, 'Hallo');
var greet = function (user) {
    if (user.name) {
        return "Hi, " + user.name;
    }
    else {
        return 'Hi';
    }
};
console.log(greet({ name: 'Rigy', uid: '120dxfds20' }));
var salam;
salam = function (nama, say) {
    console.log("say " + say + " to " + nama);
};
salam('Andi', 'Salam');
var calc;
calc = function (numOne, numberTwo, cond) {
    if (cond === 'add') {
        return numOne + numberTwo;
    }
    else {
        return numOne;
    }
};
console.log(calc(20, 30, 'add'));
// Void: 
function printUserName(userName) {
    console.log(userName);
}
printUserName('Developer');
function add(a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
}
add(5, 10);
