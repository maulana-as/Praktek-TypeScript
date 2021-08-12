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

class Invoice {
    client: string;
    details: string;
    amount: number | string;

    constructor(name: string, details: string, amount: number | string) {
        this.client = name;
        this.details = details;
        this.amount = amount
    }

    format() {
        return `${this.client} owes Rp ${this.amount} for ${this.details}`
    }

}
const invOne = new Invoice('Robert', 'work on the crowd funding website', '10.000.000')
const invTwo = new Invoice('Roy', 'Work on the AMTelco', '10.000.000')

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)
console.log(invoices, '<<<invoices');
