/**
 * Methods merupakan sebuah function yang berada didalam sebuah kelas
 * jika method memiliki access modifier public maka method tersebut
 * dapat diakses diluar kelas tapi jika access modifier tersebut private
 * maka method tersebut hanya dapat diakses didalam kelas tersebut
*/

class Animal {
    public name: string;
    population: number;

    constructor(name: string, population: number) {
        this.name = name;
        this.population = population
    }

    getAnimalName(): string {
        return this.name
    }

    getPopulation(country: string): number {
        if (this.getAnimalName() === 'Cendrawasih' && country === 'Indonesia') {
            return this.population
        } else {
            return this.population = 0
        }
    }
}

let cendrawasih = new Animal('Cendrawasih', 1000)
console.log(cendrawasih, '<<<cendrawasih')