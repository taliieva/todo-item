import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodoItem(state, action) {
      console.log(state);
      return [...state, action.payload];
    },
    deleteTodoItem(state, action) {
      console.log(state);
      return state.filter((item) => item.id !== action.payload.id);
    },
    editTodoItem(state, action) {
      console.log(state);
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
});


/*
export const addTodoIem = createAction(
  "todoList/addTodoItem",
  (payload) => ({payload})
);
export const deleteTodoItem = createAction(
  "todoList/deleteTodoItem",
  (payload) => ({payload})
);
export const editTodoItem = createAction(
  "todoList/editTodoItem",
  (payload) => ({payload})
);

const reducer = createReducer([],(builder)=>{
  builder.addCase(addTodoItem,(state,action)=>{
    state.push(action.payload);
  })
  .addCase(deleteTodoItem,(state,action)=>{
    return state.filter((item)=>item.id !== action.payload.id);
  })
  .addCase(editTodoItem, (state,action)=>{
    return state.map((item) => {
      if (item.id === action.payload.id) {
        return action.payload;
      }
      return item;
    });
  })
})
export default reducer;
*/
/*const deleteTodoItem =()=>{
  return{
    type:"todoList/deleteTodoItem"
  }
}
const editTodoItem =({payload})=>{
  return{
    type:"todoList/editTodoItem",
    payload,
  }
}*/

export const { addTodoItem, deleteTodoItem, editTodoItem } = todoSlice.actions;

export default todoSlice.reducer;
