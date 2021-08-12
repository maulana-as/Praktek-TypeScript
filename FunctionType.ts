// Fungsi pada TypeScript sama hal-nya dengan fungsi pada
// pada javascript tapi bedanya pada fungsi type script
// kita dapat menaruh type annotations pada parameter fungsi
// ataupun return type pada fungsi yang kita tulis

function sumOfVariable(a: number, b: number) {
    return a + b
}
console.log(sumOfVariable(2, 3));


/**
 * Type Function
 * 1. Named function
 * 2. Anonimous function
 * 3. Arrow function
*/

// 1. Named function
function greeatName(name?: string) {
    if (name) {
        return "Hi! " + name
    } else {
        return "Hi!"
    }
}

console.log(greeatName("Bahri"))

// 2. Anonymous function
let greeetName2 = function (name?: number): string {
    if (name) {
        return +name + " hallo";
    } else {
        return null;
    }
}

// console.log(greeetName2("Bahrul"))
console.log(greeetName2(4))


// 3.
let greetNameArrowFunc = (name?: string): string => {
    if (name) {
        return "Hi! " + name;
    } else {
        return "Hi!"
    }
}
console.log(greetNameArrowFunc("Alam"))
type StringOrNum = string | number
type ObjectWithName = { name: string, uid: StringOrNum }
const logDetails = (uid: StringOrNum, item: string): void => {
    console.log(`${item} has a uid of ${uid}`)
}

logDetails(1221, 'Hallo')


const greet = (user: ObjectWithName): string => {
    if (user.name) {
        return `Hi, ${user.name}`
    } else {
        return 'Hi'
    }
}
console.log(greet({ name: 'Rigy', uid: '120dxfds20' }));

let salam: (x: string, b: string) => void
salam = (nama: string, say: string) => {
    console.log(`say ${say} to ${nama}`);
}
salam('Andi', 'Salam')

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numberTwo: number, cond: string) => {
    if (cond === 'add') {
        return numOne + numberTwo
    } else {
        return numOne
    }
}
console.log(calc(20, 30, 'add'));


// Void: 
function printUserName(userName: string): void {
    console.log(userName)
}

printUserName('Developer')

function add(a: number, b: number, c: number | string = 10): void {
    console.log(a + b);
    console.log(c)
}

add(5, 10)
