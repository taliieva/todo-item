import React from "react";
import InputForm from "./InputForm.js";
import { Todos } from "./Todos";
import { Counter } from "./Counter.js";

function App() {
  return (
    <div>
      <InputForm />
      <Todos />
      <Counter/>
   
    </div>
  );
}

export default App;
