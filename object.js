const student = [
    {id: 20, name: 'Pori'},
    {id: 56, name: 'zayed'},
    {id: 290, name: 'Salman'},
    {id: 890, name: 'Ash'},
];
const n = student.map(s => s.name);
const id = student.map(s => s.id);
const b = student.filter(s => s.id > 100);
console.log(n);
console.log(id);
console.log(b);

