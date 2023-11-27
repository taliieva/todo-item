const sayilar = [1,20,3,4,5,6];

//butun elementler serti odemelidi-every metodu
const sonuc = sayilar.every(function(sayi){
    return sayi < 10;
})

//bir elementin serti odemeyi kifayet edir-some metodu
const sonucSome = sayilar.some(function(sayi){
    return sayi > 10;
})

console.log(sonuc);
console.log(sonucSome);