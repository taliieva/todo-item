const input = document.querySelector("input");
const button = document.querySelector("button");
const resultSection = document.getElementById("result")
button.addEventListener("click", ()=>{
    fetchUser(input.value);
})
input.addEventListener("keyup", (event)=>{
    if(event.key === "Enter"){
        fetchUser(input.value)
    }
})
const renderUserCard = (userData) =>{
const wrapper = document.createElement("div");
wrapper.classList.add('card')
const img = document.createElement("img");
img.setAttribute('src', userData.avatar_url)
const h1 = document.createElement("h1");
h1.textContent = userData.login
wrapper.append(img,h1)
if(userData.followers){
    const wrapper2 = document.createElement("div");
    wrapper2.classList.add('follow')
    const spanFollowers = document.createElement("span");
    const spanFollowing = document.createElement("span");
    spanFollowers.textContent = `Followers: ${userData.followers}`
    spanFollowing.textContent = `Following: ${userData.following}`
    wrapper2.append(spanFollowers,spanFollowing)
    wrapper.append(wrapper2)
}
    return wrapper;
}
async function fetchUser (inputVal) {
    resultSection.innerHTML = "Loading...";
    try {
            const response = await fetch(
                inputVal
                ? `https://api.github.com/users/${inputVal}`
                : `https://api.github.com/users`
                );
            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message);
            }else{
                if(Array.isArray(data)){
                    const cards = data.map((item)=>renderUserCard(item));
                    resultSection.innerHTML = "";
                    resultSection.append(...cards);
                }else{
                    const card = renderUserCard(data);
                    resultSection.innerHTML = "";
                    resultSection.append(card);
                }
            }
    } catch (error) {
        console.log(error.message);
        resultSection.innerHTML = error.message;
    }
}
fetchUser();


