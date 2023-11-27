import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoItem, editTodoItem } from "./store/todoSlice";

export const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [isEdited, setEdit] = useState(false);
  const [itemTxt, setItemTxt] = useState(text);

  const deleteTodeItemHandler = (id) => {
    dispatch(deleteTodoItem({ id }));
  };

  const editHandler = () => {
    dispatch(editTodoItem({ id, completed, text: itemTxt }));
    setEdit(!isEdited);
  };
  const toggleHandler = () => {
    dispatch(editTodoItem({ id, completed: !completed, text }));
  };

  return (
    <li className={completed ? "done" : ""}>
      {!isEdited && <span onClick={toggleHandler}>{text}</span>}
      {isEdited && (
        <input
          onChange={(e) => {
            setItemTxt(e.target.value);
          }}
          type="text"
          value={itemTxt}
        />
      )}
      {!isEdited && (
        <button onClick={() => deleteTodeItemHandler(id)}>Delete</button>
      )}
      <button onClick={editHandler}>{isEdited ? "Save" : "Edit"}</button>
    </li>
  );
};
