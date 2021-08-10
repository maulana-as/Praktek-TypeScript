let globalVar: number = 100;

function globalFunction() {
    console.log(globalFunction, '<<<global Function')

    if (true) console.log(globalVar, '<< globar function block scope')

    function nested() {
        console.log(globalVar)
    }
}

for (let c = 0; c < 3; c++) {
    console.log(globalVar, '<<<global var blocl for')
}
