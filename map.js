const a = [3, 7, 9, 2, 8];
const o = [];
for(let i = 0; i < a.length; i++){
    const e = a[i];
    const r = e * e;
    o.push(r);
}
result = a.map(function(element, index, array){
    //console.log(element, index, array);
    return element * element;
})

const s = a.map(x => x * x);

console.log(o);
console.log(result);
console.log(s);

//filter

const f =  s.filter(x => x < 2);
const z = s.find(x => x > 6);
console.log(f);
console.log(z); 
