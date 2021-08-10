// Properties secara umum digunakan untuk mendeklarasikan variable
// pada class. Secara default properties pada class memiliki access
// modifiers public properties pada class dapat dianotasikan typenya
// dengan cara seperti menganotasikan type pada sebuah varible

class Employee {
    name: string;
    age: number;
    address: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

}

const admin = new Employee('John Doe', 28)
console.log(admin, '<<<admin')