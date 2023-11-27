const kisiler = [
    {id: 1, ad: "Terane1"},
    {id: 2, ad: "Terane2"},
    {id: 3, ad: "Terane3"},
    {id: 4, ad: "Terane4"},
    {id: 5, ad: "Terane5"},
    {id: 6, ad: "Terane6"},
    {id: 7, ad: "Terane7"},
];

function kendiFindMetodum(kisiler, findValue){
    const bulunanEleman = undefined;
    for(let i = 0; i < kisiler.length; i++){
        if(findValue(kisiler[i])){
            return kisiler[i];
        }
    }
    return bulunanEleman;
}

const sonuc = kendiFindMetodum(kisiler, function(kisi){
    return kisi.id === 2;
})
console.log(sonuc);
/*
const sonuc = kisiler.find(function(kisi){
    return kisi.id === 2;
});
function findMethod(kisiler){
    for(let i = 0; i < kisiler.length; i++){
    if(kisiler[i].id === 2){
        return kisiler[i];
    }
}
}

console.log(findMethod(kisiler));
*/