/**
 * Generics merupakan sebuah tipe yang dianotasikan menggunakan
 * sebuah variable. Generics menawarkan cara untuk membuat sebuah
 * code menjadi lebih reusable karena typenya menjadi lebih dinamis
 * 
 * function fName<T>(args: T) { 
 *   return args
 * }
 * 
*/

interface IKaryawan {
    gajihKaryawan(): number
}

class Karyawan implements IKaryawan {

    firstname: string;
    lastname: string;
    jabatan: string;

    constructor(firstname: string, lastname: string, jabatan: string) {
        this.firstname = firstname;
        this.lastname = lastname
        this.jabatan = jabatan
    }

    public gajihKaryawan() {
        if (this.jabatan === 'Manager') return 10000000
        else if (this.jabatan === 'Staff') return 7000000
        else if (this.jabatan === 'OB') return 3000000
        else return 0
    }

}


const dani: Karyawan = new Karyawan('Ahmad', 'Dani', 'Manager')
console.log(dani.gajihKaryawan())