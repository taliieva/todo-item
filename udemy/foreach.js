let numbers = [1,2,3,4,5,6];
/*
numbers.forEach(ikiParametreAlanFonksiyon);

function ikiParametreAlanFonksiyon(number, index){
    console.log(number,index)
}
*/
//higher order function:
diziYazdir(numbers, function(deger, index){
    console.log("value: " + deger+" index: "+index);
})
//callback
function diziYazdir(dizi, callback){
    for(let i = 0; i < dizi.length; i++){
        callback(dizi[i], i);
    }
}

/*
console.log("++++++++++++++++++");
for(let i = 0;i < numbers.length; i++){
    console.log(numbers[i]);
}
console.log("++++++++++++++++++");
for(let item of numbers){
    console.log(item);
}
*/