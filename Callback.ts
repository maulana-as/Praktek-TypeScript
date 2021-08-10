// Callback merupakan function yang memanggil function
// lainnya
// 1. Membeli Ikan 
// 2. Membeli Sayur
// 3. Membeli daging
// 4. Membeli telur
// 5. Membeli Tomat
// 6. Membeli Cabai
// 7. Membeli Bawang

function membeliIkan(callBack: Function) {
    console.log('Membeli Ikan')
    callBack(membeliDaging)
}

function membeliSayur(callBack: Function) {
    console.log('Membeli Sayur')
    callBack(membeliTelur)
}

function membeliDaging(cb: Function) {
    console.log('Membeli Daging')
    cb(membeliTomat)
}

function membeliTelur(cb: Function) {
    console.log('Membeli Telur')
    cb(membeliCabai)
}

function membeliTomat(callback: Function) {
    console.log('Membeli Tomat')
    callback(membeliBawang)
}

function membeliCabai(cb: Function) {
    console.log('Membeli Cabai')
    cb(membeliSayur)
}

function membeliBawang() {
    console.log('Membeli Bawang')
}

membeliIkan(membeliSayur)