import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoItem } from "./store/todoSlice";

const InputForm = () => {
  const dispatch = useDispatch();
  const list = useSelector(({ todos }) => todos);
  const [inputVal, setInputVal] = useState("");
  const inputChangeHandler = (value) => {
    setInputVal(value);
  };
  const submitHandler = (e, inputVal) => {
    e.preventDefault();
    dispatch(
      addTodoItem({ id: list.length + 1, completed: false, text: inputVal })
    );
    setInputVal("");
  };
  return (
    <form
      onSubmit={(e) => {
        submitHandler(e, inputVal);
      }}
    >
      <input
        value={inputVal}
        type="text"
        onChange={(e) => {
          inputChangeHandler(e.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};
export default InputForm;
