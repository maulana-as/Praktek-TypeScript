var list = [1, 2, 3];
var dataList = [1, 2, 3];
// Tuples 
// Typescript memiliki tipe data baru yang berbentuk
// array dengan panjang array yang telah diketahui dan 
// dapat mengandung beberapa tipe data
// laukan anotasi tuple setelah nama variable
var student = ['John Doe', 60];
console.log(student, '<<tuple type data');
// type baru pada type data tuple di TypeScripts 4.0
function tail(arg) {
    // desctructuring sebuah array menggunakan konsep tuple
    // gunakan spread operator pada value kedua desctructuring
    var _ = arg[0], result = arg.slice(1);
    return result;
}
var myFavoriteFruits = ["Jeruk", "Mangga", "Leci", "Pisan"];
console.log(tail(myFavoriteFruits));
// Labeled tuple element 
function printUsernameInfo() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return {
        name: args[0],
        age: args[1]
    };
}
var employeeName = "John Doe";
var employeeAge = 25;
console.log(printUsernameInfo(employeeName, employeeAge));
/**
 *
*/ 
