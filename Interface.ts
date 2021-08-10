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

interface LoggerInterface {
    errorLog(): void
}

class Logger implements LoggerInterface {
    error: string;

    constructor(error: string) {
        this.error = error
    }

    public errorLog(): void {
        console.log(this.error)
    }
}

const myLogger: Logger = new Logger('Error request')
myLogger.errorLog()

