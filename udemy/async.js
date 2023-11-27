function getUser(id){
    console.log(`with ${id} user`);

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({ad: "Terane", id: id});
        }, 2000);
    })
}

function getCourses(userName){
    console.log(`${userName} courses`);

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            //reject("error happened");
            resolve(['java', 'javascript','flutter']);
        }, 2000);
    })
}

function getComments(kursad){
    console.log(`${kursad} adli kursun yoorumlari`);

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("course is gorgeous");
        }, 2000);
    })
}
/*
getUser(12345).then(user=>{
    getCourses(user.ad).then(courseArr =>{
        getComments(courseArr[0]).then(yorum => {
            console.log(yorum);
        });
    })
});
*/
/*
getUser(12345)
    .then(user =>getCourses(user.ad))
    .then(courseArr => getComments(courseArr[0]))
    .then(yorum => console.log(yorum))
    .catch(error => console.log(error));
*/
showComment();
async function showComment(){
    try{
    const userObj = await getUser(45678);
    const courseArr = await getCourses(userObj.ad);
    const yorum = await getComments(courseArr[0]);
    console.log(yorum);
    }
    catch(err){
        console.log("error happened"+err)
    }

    
}
//getCourses('Terane').then(courseArr => {
//    console.log(courseArr);
//})