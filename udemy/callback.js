/*function getName(callback){
   setTimeout(()=>{
    let name = "Terane";
    callback(name);
   },1000);

}

function getSurname(name){
    setTimeout(()=>{
        let surname = "Eliyeva";
        console.log(name,surname);
    },500);
}

//getName(getSurname);
getName((name)=>{
    getSurname(name, (surname)=>{
        console.log(name ,surname)
    })
})
*/
//getName();
//getSurname();


//const box = document.querySelector(".box");
/*
setTimeout(()=>{
    box.classList.add("bigger")
    setTimeout(()=>{
        box.classList.add("circle")
        setTimeout(()=>{
            box.classList.add("move")
            setTimeout(()=>{
                box.classList.add("colored")
                setTimeout(()=>{
                    box.classList.remove("colored")
                    setTimeout(()=>{
                        box.classList.remove("move")
                        setTimeout(()=>{
                            box.classList.remove("circle")
                            setTimeout(()=>{
                                box.classList.remove("bigger")
                            },500)
                        },500)
                    },500)
                },500)
            },500)
        },500)
    },500)
},500)
*/
/*
new Promise((resolve, reject)=>{
    resolve({
        name: "Terane",
        surname: "Eliyeva"
    })
    reject()
})

.then(data =>{
    data.web ='http://prototurk.com'
    return data;
})
.then(data =>console.log(data))

.catch(data =>{
    console.log(data)
})

.finally(()=> console.log('bitdi'))*/
/*
const wait = ms => new Promise(resolve => setTimeout(resolve,ms))
wait(500)
.then(()=>{
    box.classList.add("bigger")
    return wait(500);
})
.then(()=>{
    box.classList.add("circle")
    return wait(500);
})*/
/*
class Terane{
    constructor(callback){
        callback(this.resolve, this.reject)
    }
    resolve(data){
        console.log(data)
    }
    reject(data){

    }
}

/*function Prototurk(resolve,reject){
    resolve('test')
}
new Terane(Prototurk)*/
/*
new Terane((resolve,reject)=>{
    resolve('terane eliyeva')
})
*/


   