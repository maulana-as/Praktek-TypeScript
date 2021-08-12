/**
 * Interface merupakan kerangka dari sebuah class atau object
 * Digunakan untuk mempermudah memahami sebuah class
 *
 * contoh
 *
 * interface IClass {
 *  properties : type,
 *  methods(parameter: type) : type
 * }
 *
 * class MyClass implements IClass {
 *      properties: type;
 *      constructor(properties: type) {
 *      }
 *      methods(parameter: type) : type {
 *
 *      }
 * }
 *
 *
*/
var Logger = /** @class */ (function () {
    function Logger(error) {
        this.error = error;
    }
    Logger.prototype.errorLog = function () {
        console.log(this.error);
    };
    return Logger;
}());
var myLogger = new Logger('Error request');
myLogger.errorLog();
var User = /** @class */ (function () {
    function User(name, password) {
        this.name = name;
        this.password = password;
    }
    User.prototype.passWordMin = function () {
        if (this.password.length < 6) {
            return 'Min Password adalah 6 karakter';
        }
    };
    return User;
}());
var adminPN = new User('Admin 01', '1234');
console.log(adminPN.passWordMin());
