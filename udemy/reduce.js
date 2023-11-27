const sayilar = [1, 2, 3, 4, 5];

/*
function topla(){
    let cem = 0;
    for(let i = 0; i < sayilar.length; i++){
        cem  += sayilar[i];
    }
    console.log(cem);
}
topla();
*/
/*
const result = sayilar.reduce(function(cem,curr,index){
    return cem += curr;
},0)
console.log(result);
*/
/*
const yeniDizi = sayilar.map(function(sayi){
    return sayi *2;
});

const newArr = sayilar.reduce(function(first, second){
    first.push(second*2);
    return first;
},[]);
console.log(yeniDizi);
console.log(newArr)
*/
/*
const newArr = sayilar.reduce(function(pre,sayi,index){

    if(sayi > 3){
        pre.push(sayi);
    }
    return pre;
 },[]);

 console.log(newArr)
*/

const findElement = sayilar.reduce(function(pre, sayi, index){
    if(sayi === 2){
        return sayi;
    }
    else{
        return pre;
    }
},undefined);

console.log(findElement);