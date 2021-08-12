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
var Invoice = /** @class */ (function () {
    function Invoice(name, details, amount) {
        this.client = name;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes Rp " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Robert', 'work on the crowd funding website', '10.000.000');
var invTwo = new Invoice('Roy', 'Work on the AMTelco', '10.000.000');
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices, '<<<invoices');
