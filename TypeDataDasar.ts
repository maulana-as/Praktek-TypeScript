let list: number[] = [1, 2, 3];
let dataList: Array<number> = [1, 2, 3]

// Tuples 
// Typescript memiliki tipe data baru yang berbentuk
// array dengan panjang array yang telah diketahui dan 
// dapat mengandung beberapa tipe data

// laukan anotasi tuple setelah nama variable
let student = ['John Doe', 60];
console.log(student, '<<tuple type data')

// type baru pada type data tuple di TypeScripts 4.0
function tail(arg: Array<string>): Array<string> {
    // desctructuring sebuah array menggunakan konsep tuple
    // gunakan spread operator pada value kedua desctructuring
    const [_, ...result] = arg;
    return result
}

const myFavoriteFruits = ["Jeruk", "Mangga", "Leci", "Pisan"]
console.log(tail(myFavoriteFruits))

// Labeled tuple element 
function printUsernameInfo(...args: [string, number]) {
    return {
        name: args[0],
        age: args[1],
    }
}

const employeeName: string = "John Doe"
const employeeAge: number = 25

console.log(printUsernameInfo(employeeName, employeeAge))

/**
 *
*/