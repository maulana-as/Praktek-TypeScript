// Properties secara umum digunakan untuk mendeklarasikan variable
// pada class. Secara default properties pada class memiliki access
// modifiers public properties pada class dapat dianotasikan typenya
// dengan cara seperti menganotasikan type pada sebuah varible
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    return Employee;
}());
var admin = new Employee('John Doe', 28);
console.log(admin, '<<<admin');
