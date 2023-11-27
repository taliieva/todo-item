const btn = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");

const fetchTodos = async () => {
try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();

    if(!res.ok){
        throw new Error("Something went wrong!")
    }else{
        list.append(...todos.map((item)=>renderTodoItem(item)).splice(0,10)); 
    }


} catch (error) {
    console.log(error)
}
}

const saveTodo = async () => {
    try {
        const reqBody = {title: input.value};
        const createdItemRes =  await fetch(`https://jsonplaceholder.typicode.com/todos`,
         { 
            method: "POST",
            body: JSON.stringify(reqBody)
        });

        if(!createdItemRes.ok){
             throw new Error("Something went wrong!")
         }else {
            list.prepend(renderTodoItem(reqBody));
            input.value = "";
 
         }
     } catch (error) {
        console.log(error)
     }
}

const deleteTodo = async (id)=>{
    try {
       const deletedItemRes =  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,
        { method: "DELETE"}
        );
        if(!deletedItemRes.ok){
            throw new Error("Something went wrong!")
        }else {

        }
    } catch (error) {
        console.log(error)
    }
}


function renderTodoItem (data){
    const li = document.createElement("li");
    li.innerText = data.title;

    const dltBtn =  document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.style.color = "red";

    const editBtn =  document.createElement("button");
    editBtn.innerText = "Edit";

    li.append(dltBtn, editBtn);

    li.addEventListener("click", async (event)=>{
        if(event.target.tagName === 'BUTTON'){
            dltBtn.setAttribute("disabled", true);
            await deleteTodo(data.id);
            li.remove();
        }else{
            li.classList.toggle("done");
        }
    })

return li;
}

input.addEventListener("keyup", (event)=>{
    if(event.key === 13){
        if(!input.value.trim().length){
            alert("input is empty");
            return;
        }
        renderTodoItem(input.value);

    input.value = "";
    }
})

btn.addEventListener("click",()=>{
    saveTodo()
})

fetchTodos();
