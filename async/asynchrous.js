// asinxron proglama
/*
console.log("1");
setTimeout(()=>{
    console.log("2");
},2000);
//setTimeout ona gore isledilirki internetden melumat alarken
//ondan sonraki kodlar onun basa catmasini gozlememek ucun yazilir
console.log("3");
*/

//callback function- funksiyalari siraya salmaq ucun istifade olunur

/*
function sayHello(name, callback){
   //console.log("Hello " + name);
   console.log(`Hello ${name}`);
   callback();
}
 function goodbye(){
  console.log("Goog Bye!")
}
 
sayHello("Terane", goodbye);
*/

//AJAX and http request
/*
let myList;
const xhr = new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.onload = function(){
    const response = xhr.responseText;
    
    if(xhr.status === 200){
        myList= JSON.parse(response);
        console.log(JSON.parse(response));
    }
    else{
        console.log("xeta:"+xhr.status);
    }
};
xhr.send();
*/

//Promise

function getRandomNumber() {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 100);
    if (number % 2 === 0) {
      //console.log(Number, "is even");
      resolve(number);
    } else {
      reject( Number, "is odd");
    }
  });
}

getRandomNumber()
  .then((number) => console.log("solved" + number))
  .catch((error) => console.log(error));
