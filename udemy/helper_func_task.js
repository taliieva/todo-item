const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//tek elementleri tapib basqa array-e gondermek(filter)
const oddNumber = numbers.filter((number)=>{
    if(number % 2 != 0){
        return number;
    }
})
console.log(oddNumber);

//yeni array-in her bir elementinin kvadratini tapib basqa array-e gondermek(map)
const squareNumbers = oddNumber.map((number)=>{
    return number*number;
})
console.log(squareNumbers);

//10-dan boyuk elementlerin cemini tap(reduce)
const biggerThanTen = squareNumbers.reduce((acc,curr)=>{
    if(curr > 10){
        return acc += curr;
    }
    else{
        return acc;
    }
},0)
console.log(biggerThanTen);

//qisa hali, zincirleme funksiya

function shortVersion(numbers){
    const result = numbers.filter((number)=>{
        if(number % 2 != 0){
            return number;
        }
    }).map((number)=>{
        return number*number;
    }).reduce((acc,curr)=>{
        if(curr > 10){
            return acc += curr;
        }
        else{
            return acc;
        }
    },0);
    console.log(result);
}
shortVersion(numbers)