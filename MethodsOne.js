/**
 * Methods merupakan sebuah function yang berada didalam sebuah kelas
 * jika method memiliki access modifier public maka method tersebut
 * dapat diakses diluar kelas tapi jika access modifier tersebut private
 * maka method tersebut hanya dapat diakses didalam kelas tersebut
*/
var Animal = /** @class */ (function () {
    function Animal(name, population) {
        this.name = name;
        this.population = population;
    }
    Animal.prototype.getAnimalName = function () {
        return this.name;
    };
    Animal.prototype.getPopulation = function (country) {
        if (this.getAnimalName() === 'Cendrawasih' && country === 'Indonesia') {
            return this.population;
        }
        else {
            return this.population = 0;
        }
    };
    return Animal;
}());
var cendrawasih = new Animal('Cendrawasih', 1000);
console.log(cendrawasih, '<<<cendrawasih');
var panda = new Animal('Panda', 0);
console.log(panda, '<<<panda');
