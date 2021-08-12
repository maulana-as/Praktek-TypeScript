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

// Interface kedua 
interface UserInterface {
    passWordMin(password: string): string
}

class User implements UserInterface {
    name: string;
    password: string;

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password
    }

    public passWordMin(): string {
        if (this.password.length < 6) {
            return 'Min Password adalah 6 karakter'
        }
    }
}

const adminPN: User = new User('Admin 01', '1234')
console.log(adminPN.passWordMin())