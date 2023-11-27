const names = ['emre','ali','hasan','ayse'];

const numbers = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const students = [
    {id:12, name:'emre',age:25},
    {id:22, name:'hasan',age:15},
    {id:32, name:'fatma',age:55},
    {id:13, name:'nuriye',age:19},
    {id:92, name:'kemal',age:45},
    {id:15, name:'mustafa',age:75},
    {id:44, name:'ceren',age:30},
];

//array-leri kopyalamaq
let copy = [];
/*
for(let name of names){
    copy.push(name);
}
*/
//copy = Array.from(names);

//spread metodu
copy = [...names];

copy.sort();

console.log(copy);
console.log(names);

const ad = "Terane Eliyeva";
let letters = ad.split('');
console.log(letters);

letters = [...ad];
console.log(letters);

function addNumbers(...paramaters){
    let sum = 0;
    for(let s of paramaters){
        sum += s;
    }
    console.log(sum);
}
addNumbers(1,2,3,4);