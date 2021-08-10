// For Of merupakan bentuk lain dari for loop
// for of dapat melakukan iterasi untuk array, tupple
// maupun melakukan iterasi untuk object keys, 
// tidak sama seperti for..in. for..of memberikan kembalian
// element dari object yang diiterasi

let arrIterable: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let summary: number = 0;
for (let val of arrIterable) {
    summary += val;
}
console.log(summary, '<<<summary')