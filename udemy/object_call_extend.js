// extend parentden elave ozumuze aid olan xususiyyetler

//person constructor function
function Person(ad, soyad){
    this.ad = ad; // her bir sexs ucun deyisdiyi ucun bele yazilir
    this.soyad = soyad;
}

Person.prototype.sayHello = function(){
    return `Hello i am ${this.ad} ${this.soyad}`;
}


function Student(ad, soyad, yas, sinif){

    Person.call(this, ad, soyad); 
    this.yas = yas;
    this.sinif = sinif;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype. sayHello = function(){
    return `Hello i am from ${this.sinif} ${this.ad} ${this.soyad}`
}

Student.prototype.sayHello = function(){
    return `Salam men ${this.yas} yasindayam`
}


const person1 = new Person("Terane", "Eliyeva");
console.log(person1.sayHello());

const studen1 = new Student("Terane", "Eliyeva", 22, 11);
console.log(studen1.sayHello());


function MyArray(){

}

MyArray.prototype = Object.create(Array.prototype); // yaratdigin funk. arrayin xusiyyetlerini goturur
const myArray = new MyArray();

myArray.push(1231);
myArray.push("salam");
console.log(myArray);


Array.prototype.kendiMapYapim = function(islem){
    const yeniDizi = [];
    for(let i = 0; i < this.length; i++){
       yeniDizi.push(islem(this[i],i));
    }
    return yeniDizi;
}

const arr = [1, 2, 3];
const newArr = arr.map(function(num){
    return num + 2;
});

const myNewArr = arr.kendiMapYapim(function(num){
    return num + 2;
})
console.log(newArr);
console.log(myNewArr);