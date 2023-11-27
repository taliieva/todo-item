function countDown(number){
    const elem = document.querySelector(".count-down");
    if(number === -1){
        elem.innerText = "Boom!"
    }
    else{
        setTimeout(()=>{
            elem.innerText = number;
            countDown(number-1);
        },1000)
    }
}
countDown(5);