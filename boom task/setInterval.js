function countDown(number){
    const elem = document.querySelector(".count-down");

    if(number === -1){
        elem.innerText = "BOOM!";
    }
    else 
    {
        setInterval(() => {
            elem.innerText = number;
            countDown(number-1);
        }, 1000);
    }
}
countDown(5);