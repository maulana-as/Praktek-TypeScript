// Spread Operator TS
// copying array
let arr: Array<number> = [1, 2]
let coppyArray: Array<number> = [...arr, 3, 4];
console.log(coppyArray, '<< coppyArray')

// Spread Object  Value (Copy Object Element)
const point2D = { x: 1, y: 2 };
const point3D = { ...point2D, z: 3 }
console.log(point3D, '<<<point3D')


// Ingat kita dapat mengisi parameter pada fungsi Typescript
// menggunakan spread operator untuk mempersingkat menulis
// parameter pada sebuah fungsi 

// pada javascript rest parameter ditulis menggunakan func.apply

/**
 * before typeScript
 * function foo(a, b): string {
 *  return a + b
 * }
 *
 * let d = foo.func(null, [10, 20])
 * console.log(d, '<<<d ')
 */

function boo(...x: number[]): void {
    console.log(x, "<< x")
}

var args: number[] = [0, 1, 2]
boo(...args)
