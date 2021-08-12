let mixed: (string | number | boolean)[] = []
mixed.push('hello world');
mixed.push(10)
mixed.push(false)
console.log(mixed, '<<mixed array');

let uid: number | string;
uid = '1234Xdz'
uid = 1234
console.log(uid, '<< uid as number or string')

let ninjaOne: object;
ninjaOne = { name: 'Yoshi', age: 27 }

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}

ninjaTwo = { name: 'mario', age: 20, beltColour: 'blue' }
console.log(ninjaTwo, '<< ninjaTwo')