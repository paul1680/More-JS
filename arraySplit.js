const num =[1, 2, 4, 6, 3, 7, 99, 56, 78, 67]
const part = num.slice(1,4);
const remove = num.splice(2,3, 99, 89);

console.log(remove);
console.log(num);

const together = num.join(",")
console.log(together);