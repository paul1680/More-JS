let b = 23; //global variable 
function sum(one, two){
    let r = one + two + b;
    console.log(r);
    return r;
}
const o = sum(7, 7);
//console.log(r); will be undefined.
console.log(o);
console.log(day);
let day = 8;
//console.log(day);