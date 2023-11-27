// Object key-value cutunden ibaret deyisen

//object literals
/*
const obj = {
    ad: "Terane",
    yas: 22,
    evli: false,
    sevdiyirengler: ['qirmizi', 'qara', 'mavi'],
    adres:{
        seher: "Baki",
        seriya: 50,
    },
    bilgileriSoyle: function(){
        return `Menim adim ${this.ad}, yasim ${this.yas}`;//template literal
    }, 
    //objectin icindeki funskiyaya metod deyirler
    ["full-name"]: "Terane Eliyeva",
};

console.log(obj.bilgileriSoyle());

obj.yas = 35; //yasi update edecek
obj.uni = "BMU"; //add etmek ucundur lakin istifade edilmesi tovsiye olunmur
delete obj.uni; // verilen deyeri silir
console.log(obj);

const obj2 = {
    ad: "Pirveli",
    yas: 22,
    evli: false,
    sevdiyirengler: ['qirmizi', 'qara', 'mavi'],
    adres:{
        seher: "Baki",
        seriya: 50,
    },
    bilgileriSoyle: function(){
        return `Menim adim ${this.ad}, yasim ${this.yas}`;//template literal
    }, 
    //objectin icindeki funskiyaya metod deyirler
    ["full-name"]: "Terane Eliyeva",
};
*/

const student1 = createStudent('Terane', 22, false, 'BMU');
const student2 = createStudent('Hasan', 27, true, 'BDU');

//factory functions
function createStudent(ad, yas, evli, uni){
    return {
        name: ad,
        age: yas,
        marriage: evli,
        university: uni,
        //method
        showInfo: function(){
            return `adim ${this.name}, yasim ${this.age}, uni ${this.university}`
        }
    };
}

//console.log(student1.showInfo()); //object-i icinde funksiya cagiranda mutleq () qoyulmalidir
//console.log(student2.showInfo());

//constructor function
function Student(ad, yas, evli, uni){
    this.name = ad;
    this.age = yas;
    this.marriage = evli;
    
}
// new istifade olunanda 3 sey bas verir:
// 1) yeni bir object yaradir
// 2) return yazmaga ehtiyac qalmir
// 3) this-i o an yaradilan deyere beraberlesdirir
const student3 = new Student('Ayse', 23, false, 'ADNSU');
//console.log(student3);

const yeni = new student3.constructor("yeni", 50, true, "");
/*
console.log(yeni); 

//JS-de butun obyektler onu yaradan constructor funksiyasiya cixisi olur
console.log(student3.constructor); // var olan bir seyi funksiya kimi cagiranda undefined deyer qaytarir
const testObj = {};
console.log(testObj.constructor()); // funksiya kimi cagiranda yeni bir pbject yaradir, array ve funksiyalar ucun de kecerlidir

const arr = [];
console.log(arr.constructor); // arrayler de bir obyektdir

const func = function(){};
console.log(func.constructor);
*/
// js ile beraber gelen built in constructor function var

//prototype
// prototype deyerleri miras olaraq alir
Student.prototype.uni = "BMU";
Student.prototype.showInfo = function(){
    return `adim ${this.name}, yasim ${this.age}, uni ${this.uni}`;
}

console.log(student3.showInfo());
console.log(student3.constructor.prototype);
console.log(Object.getPrototypeOf(student3));

const ad = "Terane";
console.log(typeof ad); //string-dir
console.log(ad instanceof Object);

console.log(ad.constructor.prototype); // string objecti sayilir. stringe object kimi davranildiginda bele olur

const reng = new String("qirmizi");
console.log(typeof reng);
