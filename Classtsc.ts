/**
* Class mengandung 3 element penting
1. Properties variable pada class
2. Constructor method pertama yang dijalankan ketika instance class
   dibuat
3. method
   method merupakan suatu operasi berupa fungsi-fungsi yang dapat
   dikerjakan oleh suatu object. Method didefiniskan pada class akan
   tetapi dipanggil melalui object
*/
class Character {
    public fullname: string

    constructor(firstname: string, lastname: string) {
        this.fullname = `${firstname} ${lastname}`
    }

    public greet(name?: string) {
        if (name) {
            return `Hi! ${name}, my name is ${this.fullname}`
        } else {
            return `Hi! my name is ${this.fullname}`
        }
    }
}

// membuat instance class menggunakan keywords new
// class dapat digunakan untuk menganotasikan sebuah type
const archer: Character = new Character('Robin', 'Hood')
let msg = archer.greet('adly');
console.log(msg, '<<<access to method class Characteer')