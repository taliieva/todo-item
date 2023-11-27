// action = {type , payload}

import React, { useReducer } from "react";
//import { reducer } from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import { decrement, increment, incrementByX } from "./store/counterSlice";
//export const reducer = (state, action) => {
  //if (action.type === "increment") {
  //  return { count: state.count + 1 };  
  //} else if (action.type === "decrement") {
  //  return { count: state.count - 1 };
  //} else if (action.type === "incrementByX") {
  //  return { count: state.count + action.payload };
  //}
  //return state;
//};


export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state)=> state.counter);
  React.useEffect(() => {
    console.log("updated");
  });
  
  
  return (
    <>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByX(10))}>
        10+
      </button>
      <button onClick={() => dispatch(incrementByX(20))}>
        20+
      </button>
      <br />
    </>
  );
};





 
