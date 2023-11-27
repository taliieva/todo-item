const btn = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");

let state = [];

const setState = (updatedState)=>{
  state = updatedState;
  sessionStorage.setItem("state", JSON.stringify(state));
}
const fetchTodos = async () => {
  try {
    const storedState = sessionStorage.getItem("state");
    if(!storedState){
      setState(JSON.parse(storedState));
      list.append(...state.map((item) => renderTodoItem(item)));
      return;
    }
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();

    if (!res.ok) {
      throw new Error("Something went wrong!");
    } else {
      setState(todos.splice(0, 10));
      list.append(...state.map((item) => renderTodoItem(item)));  //[sdgdg,dgdg,gdgdg]
    }
  
  } catch (error) {
    console.log(error);
  }
};

const saveTodo = async () => {
  try {
    const reqBody = { title: input.value };
    const createdItemRes = await fetch(
      `https://jsonplaceholder.typicode.com/todos`,
      {
        method: "POST",
        body: JSON.stringify(reqBody),
      }
    );

    if (!createdItemRes.ok) {
      throw new Error("Something went wrong!");
    } else {
      list.prepend(renderTodoItem(reqBody));
      setState([...state, {...reqBody, id: ++state.length, completed: false}]);
      
      input.value = "";
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (id) => {    //[]
  try {
    const deletedItemRes = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { method: "DELETE" }   
    );
    if (!deletedItemRes.ok) {
      throw new Error("Something went wrong!");
    } 
    return deletedItemRes.json();
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (data)=>{
  try{
    const response  = await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
    
    const dataRes = await response.json();
    if(!response.ok){
      throw new Error(dataRes.message)
    }
    return dataRes;
  }
  catch(error){
    console.log(error)
  }
}

const updatedPartialTodo = async (data)=>{
  try{
    const response  = await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
    
    const dataRes = await response.json();
    if(!response.ok){
      throw new Error(dataRes.message)
    }
    return dataRes;
  }
  catch(error){
    console.log(error)
  }
}

const handleDeleteBtn = async (id)=>{
  const li = document.querySelector(`li[data-id='${id}']`);
  const dltBtn = li.querySelector("button[data-type='delete'");
  dltBtn.setAttribute("disabled", true);
  await deleteTodo(id);
  setState(state.filter(item => item.id !== Number(id)));  //[teranegullu]
  li.remove();
}

const handleEditBtn = async (id)=>{
  //ui part
        const li = document.querySelector(`li[data-id="${id}"]`);
        const txtSpan = li.querySelector("span");
        const editBtn = li.querySelector("button[data-type='edit'");
        const inputTxt = li.querySelector("input");

  // data part
        setState(state.map((item)=>item.id === Number(id) ? {...item,title:inputTxt.value}: item));
        const item = state.find((item)=>item.id === Number(id));

        txtSpan.classList.toggle("hidden");
        if (txtSpan.classList.contains("hidden")) {
          inputTxt.setAttribute("type", "text");
          editBtn.innerText = "Save";
        }else {
          inputTxt.setAttribute("type", "hidden");
          const updatedTodo = await updateTodo(item);
          //inputTxt.setAttribute("value", updatedTodo.title);
          txtSpan.innerText = inputTxt.value;
          editBtn.innerText = "Edit";
        }
}

const handleToggle = async(id)=>{
  try{
  const li = document.querySelector(`li[data-id="${id}"]`);
  const txtSpan = li.querySelector("span");
  const item = state.find(val=>val.id === Number(id));
  const data = await updatedPartialTodo({id, completed: !item.completed});
  const updatedState = state.map((stateItem)=>{
        if(stateItem.id === Number(id)){
          return data;
        }
        return stateItem;
    })

  setState(updatedState);
  }
  catch(error){
    console.log(error);
  }
}


const handlerMapper = {
  "BUTTON-delete": (id)=>handleDeleteBtn(id),
  "BUTTON-edit":(id)=>handleEditBtn(id),
  "SPAN": (id)=>handleToggle(id)
}

function renderTodoItem(data) {
  const li = document.createElement("li");
  li.setAttribute("data-id", data.id);

  const txtSpan = document.createElement("span");
  txtSpan.innerText = data.title;

  if(data.completed){
    txtSpan.classList.add("done");
  }

  const inputTxt = document.createElement("input");
  inputTxt.setAttribute("type", "hidden");
  inputTxt.setAttribute("value", data.title);

  const dltBtn = document.createElement("button");
  dltBtn.innerText = "Delete";
  dltBtn.style.color = "red";
  dltBtn.setAttribute("data-type", "delete");

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.setAttribute("data-type", "edit");

  li.append(txtSpan, inputTxt, dltBtn, editBtn);
  return li;
}
list.addEventListener("click", (event) => {
  const id = event.target.parentElement.dataset.id;
  const type = event.target.dataset.type ? `-${event.target.dataset.type}`: '';
  handlerMapper[`${event.target.tagName}${type}`]?.(id);
})


input.addEventListener("keyup", (event) => {
  if (event.key === 13) {
    if (!input.value.trim().length) {
      alert("input is empty");
      return;
    }
    renderTodoItem(input.value);

    input.value = "";
  }
});

btn.addEventListener("click", () => {
  saveTodo();
});

fetchTodos();
 