/*const myPromise = new Promise((resolve, reject) =>{

    //uzun muddetli isler burada yazilir setTimeout kimi
    setTimeout(()=>{
        //console.log("3 saniyelik islem bitdi");
        //resolve("3 saniyelik islem bitdi");
        reject("do not have access");
    },3000);
})

myPromise
    .then(result => {console.log(result);})
    .catch(error => {console.log(error);})
    */
/*
function getChildren() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arr = [];
      for (let i = 0; i < 300; i++) {
        arr.push({ ad: "children " + (i + 1), id: i + 1 });
      }
      //resolve(arr);
      reject("error");
    }, 2000);
  });
}
getChildren()
    .then((childrenArr) => {console.log(childrenArr);})
    .catch((error) => console.log(error));
*/
/*
const promiseSuccess = Promise.resolve("successful promise");
const promiseError = Promise.reject("error");

promiseSuccess.then(result => console.log(result));

promiseError
    .then(res => console.log(res))
    .catch(error => console.log(error));
    */

const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("3 saniye")
    },3000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("4 saniye")
    },4000);
});

//Promise.all([p1, p2])
//    .then(result => console.log(result));

Promise.race([p1,p2])
    .then(result => console.log(result));