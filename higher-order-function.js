// hof avu function ke jema function ne ek value  tarike pass karvama ave atheva function in andar biju
//  function call karvama ave 

function abcd(val) {
    console.log("outer function!");
    return function () {
        console.log("inner function!");
    }
}

abcd()();