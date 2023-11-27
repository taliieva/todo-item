const sayilar = [1, 2, 3, 4, 5, 6];

function kendiMapYapim(dizi, islem){
    const yeniDizi = [];
    for(let i = 0; i < dizi.length; i++){
       yeniDizi.push(islem(dizi[i]));
    }
    return yeniDizi;
}

const olusanYeniDizi = kendiMapYapim(sayilar, function(sayi){
    return sayi*5; 
});
console.log(olusanYeniDizi);
/*
const yenisayilar = sayilar.map(function(sayi){
    return sayi * 2;
});

console.log(sayilar);
console.log(yenisayilar);

const kitablar = [
    {adi: "1", sayfaSayisi: 30},
    {adi: "2", sayfaSayisi: 40},
    {adi: "3", sayfaSayisi: 50},
];

const sayfaSayilari = kitablar.map(function(kitab){
    return kitab.sayfaSayisi;
});

console.log(sayfaSayilari);

const kisiler = [
    {ad: "Terane", soyadi: "Eliyeva"},
    {ad: "Eli", soyadi: "Eliyev"},
    {ad: "Veli", soyadi: "Veliyev"},
]

const yeniIsimler = kisiler.map((kisi) => kisi.ad + " " + kisi.soyadi);
console.log(yeniIsimler);
*/