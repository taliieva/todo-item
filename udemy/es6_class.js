class Person{

    static count = 0;

    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
        Person.count++;
    }

    sayHello(){
        return `salam men ${this.ad + ' ' + this.soyad}`
    }
    static test(){
        console.log("static metod");
    }
}


class Student extends Person{
    constructor(ad,soyad,sinif){
        //this.ad = ad;
        //this.soyad = soyad;
        super(ad,soyad); //yuxaridaki tekrarin qarsini alir, ust sinifden goturur deyerleri
        this.sinif = sinif;
    }
//static metod:
    sayClass(){
        return `men ${this.sinif}-de oxuyuram`
    }
}

const student1 = new Person("terane", "eliyeva");
console.log(student1.sayHello());
const student2 = new Student("rehman", "eliyev",11);
console.log(student2.sayHello()); //person-la ortaq deyerler var lakin elaveler student ile gelir
console.log(student2.sayClass());

console.log(Person.count);

Person.test();
const m = new Math();
m.random();
Math.random();