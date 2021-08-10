// For Of merupakan bentuk lain dari for loop
// for of dapat melakukan iterasi untuk array, tupple
// maupun melakukan iterasi untuk object keys, 
// tidak sama seperti for..in. for..of memberikan kembalian
// element dari object yang diiterasi
var arrIterable = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var summary = 0;
for (var _i = 0, arrIterable_1 = arrIterable; _i < arrIterable_1.length; _i++) {
    var val = arrIterable_1[_i];
    summary += val;
}
console.log(summary, '<<<summary');
