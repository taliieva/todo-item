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

//string-i A-dan Z-e siralayir
const newArr = names.sort();
console.log(names);
//string-i Z-den A-a siralamaq
//reverse-un duzgun islemesi ucun siralanmis array olmalidir
const newArrReverse = newArr.reverse();
console.log(newArrReverse);

//const short = names.sort().reverse();

//reqemleri ardicilliqla siralamaq
const sirali = numbers.sort(function(a, b){
    return a - b;
    //boyukden kiciye: return b-a;
});
console.log(sirali);

//obyektleri siralamaq
students.sort(function(a, b){
    //yas ve id-ee gore bu hisse isleyecek
    //return a.id - b.id;

    //ada gore bu hisse isleyecek
    if(a.name < b.name){
        return -1;
    }
    else if(a.name > b.name){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(students);
