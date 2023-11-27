const bitkiler = [
    {ad: "uzum", tur: "meyve"},
    {ad: "ciyelek", tur: "meyve"},
    {ad: "banan", tur: "meyve"},
    {ad: "ispanaq", tur: "terevez"},
    {ad: "kelem", tur: "terevez"},
];


function kendiFilterYapim(dizi, filterCondition){
    const geciciDizi = [];
    for(let i = 0; i < bitkiler.length; i++){
        const sonuc = filterCondition(dizi[i]);
        if(sonuc){
            geciciDizi.push(dizi[i]);
        }
    }
    return geciciDizi;

}
function filtre(bitki){
    return bitki.tur === "meyve";
}
const meyveler = kendiFilterYapim(bitkiler, filtre);
console.log(meyveler);

/*
const meyveler = bitkiler.filter(function(bitki){
    return bitki.tur === "meyve";
});

const terevezler = bitkiler.filter(function(bitki){
    return bitki.tur === "terevez";
});

console.log(meyveler);
console.log(terevezler);
*/
/*
function meyveleriBul(){
    const geciciDizi = [];
    for(let i = 0; i < bitkiler.length; i++){
        if(bitkiler[i].tur === "meyve"){
            geciciDizi.push(bitkiler[i]);
        }
    }
    return geciciDizi;
}

function terevezleriTap(){
    const geciciDizi = [];
    for(let i = 0; i < bitkiler.length; i++){
        if(bitkiler[i].tur === "terevez"){
            geciciDizi.push(bitkiler[i]);
        }
    }
    return geciciDizi;
}
console.log(meyveleriBul());
console.log(terevezleriTap());
*/

