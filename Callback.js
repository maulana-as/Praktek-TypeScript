// Callback merupakan function yang memanggil function
// lainnya
// 1. Membeli Ikan 
// 2. Membeli Sayur
// 3. Membeli daging
// 4. Membeli telur
// 5. Membeli Tomat
// 6. Membeli Cabai
// 7. Membeli Bawang
function membeliIkan(callBack) {
    console.log('Membeli Ikan');
    callBack(membeliDaging);
}
function membeliSayur(callBack) {
    console.log('Membeli Sayur');
    callBack(membeliTelur);
}
function membeliDaging(cb) {
    console.log('Membeli Daging');
    cb(membeliTomat);
}
function membeliTelur(cb) {
    console.log('Membeli Telur');
    cb(membeliCabai);
}
function membeliTomat(callback) {
    console.log('Membeli Tomat');
    callback(membeliBawang);
}
function membeliCabai(cb) {
    console.log('Membeli Cabai');
    cb(membeliSayur);
}
function membeliBawang() {
    console.log('Membeli Bawang');
}
membeliIkan(membeliSayur);
