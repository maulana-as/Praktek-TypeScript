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
var Karyawan = /** @class */ (function () {
    function Karyawan(firstname, lastname, jabatan) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.jabatan = jabatan;
    }
    Karyawan.prototype.gajihKaryawan = function () {
        if (this.jabatan === 'Manager')
            return 10000000;
        else if (this.jabatan === 'Staff')
            return 7000000;
        else if (this.jabatan === 'OB')
            return 3000000;
        else
            return 0;
    };
    return Karyawan;
}());
var dani = new Karyawan('Ahmad', 'Dani', 'Manager');
console.log(dani.gajihKaryawan());
