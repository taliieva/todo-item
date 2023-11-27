/*console.log("Terane");
setTimeout(() =>{
console.log("vaxt bitdi")
},1000)

setTimeout(()=>{
    console.log("Gozleyir")
},500)
console.log("Eliyeva");
*/
/*
const users = [
    {
        userId : 5,
        post : "Terane Eliyeva 1"
    },
    {
        userId : 5,
        post : "Terane Eliyeva 2"
    },
    {
       userId : 5,
       post : "Terane Eliyeva 3"
    },
    {
        userId : 6,
        post : "Ali Eliyeva 1"
     },
     {
        userId : 7,
        post : "Veli Eliyeva 1"
     },
]

function getUserId(){
    setTimeout(()=> {
        return 5;
    },1000);
}

function getPostByUserId(){
    setTimeout(()=> {
        users.forEach((user)=>{
            if(user.userId === userId){
                console.log(user.post);
            }
        })
    },500);
}
let userId = getUserId();
getPostByUserId(userId);
*/



console.log("basladi")

//getChildren(childrenName);

getChildren(function(childrenArr){

}); 
console.log("bitti")
function getChildren(callback){
    setTimeout(function(){
        const arr = [];
        for(let i = 0;i < 300;i++){
            arr.push({ad:"children " +(i+1), id: i+1 })
        }
        callback(arr);
    },3000);
}

function childrenName(childrenArr){
    console.log(childrenArr);
}