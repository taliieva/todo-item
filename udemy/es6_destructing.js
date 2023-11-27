/*
let names = ['terane','eliyeva'];
const [first,last] = names;
console.log(first,last);

//array destructing
const colors = ['sari','yasil','mavi','qirmizi','qara','narinci','mor'];
const [r1,r2,,r3] = colors;

const[c1,c2,...restColors] = colors;
console.log(c1,c2,restColors);
//default deyer
const [t1,t2,t3='bilinmir',t4] = ['galatasaray','besiktas'];
console.log(t1,t2,t3,t4);

//object destruvting

let ayarlar = {
    baslik: "js",
    genislik: '300px',
    yukseklik: '300px'
};

const {baslik:b='varsayilan baslik',genislik:g,yukseklik:y} = ayarlar;
//console.log(baslik,genislik,yukseklik);
console.log(b,g,y);

const il = 'ankara';
const ilce = 'yenimahelle';

const seher = {
    il: il,
    ilce: ilce
}
//{ }isaresi solda olanda destruc edir, sagda olanda elave edir
const seher2 = {il,ilce} //key, value adi eyni olanda 1 setirde yazmq olar
console.log(seher2);

const person = {
    ad: 'terane',
    yas: 22,
    il: "ankara",
    ilce:'yenimahelle'
}
const {yas, ...rest} = person;
console.log(yas, rest);
*/

let sexs = {
    ad: {
        firstName: "terane",
        lastName: "eliyeva"
    },
    rengler: ['qirmizi','mavi'],
    yas: 22
};
 const {ad:{firstName,lastName}, rengler:[r1,r2],yas} = sexs;
 console.log(firstName,lastName,r1,r2,yas);


/*
const {ad :{firstName,lastName}} = sexs;
const {rengler: [r1, r2]} = sexs;
console.log(firstName + " "+ lastName);
console.log(r1,r2);
*/