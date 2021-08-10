// For...In adalah bentuk lain dari for loop yang dapat
// digunakan untuk melakukan iterasi pada list array 
// atau tuple yang akan mereturn value dari index array 
// yang dilakukan iterasi

let item: any = { price: 10000, amount: 200, sold: 3 }

for (let key in item) {
    // Check apakah Object memiliki property key
    if (item.hasOwnProperty(key)) console.log(key + " = " + item[key])
}