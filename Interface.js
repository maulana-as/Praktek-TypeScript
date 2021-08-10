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
