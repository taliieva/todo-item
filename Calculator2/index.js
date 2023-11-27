const parentElem = document.querySelector(".calc");
const outputElem = document.querySelector(".screen");
const MATH_OPERATION = ["*", "/", "+", "-", "=", "clear", "mod", "percentage"];
let typingValue = "";
const history = [];

const calcHandler = () => {
  let nextIndex = 0;
  const calculatedValue = history.reduce((acc, curr, currIndex, arr) => {
    if (MATH_OPERATION.includes(curr)) {
      nextIndex = currIndex + 1;
      if (arr[nextIndex] === undefined) {
        return acc;
      }
      if (curr === "+") {
        return (acc += arr[nextIndex]);
      } else if (curr === "-") {
        return (acc -= arr[nextIndex]);
      } else if (curr === "*") {
        return (acc *= arr[nextIndex]);
      } else if (curr === "/") {
        return (acc /= arr[nextIndex]);
      }
    }
    return acc;
  }, history[0]);
  outputElem.value = calculatedValue;
};
parentElem.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const clickedButtonValue = event.target.dataset.value;
    if (!MATH_OPERATION.includes(clickedButtonValue)) {
      typingValue += clickedButtonValue;
      outputElem.value = typingValue;
    } else {
      if (
        MATH_OPERATION.includes(history[history.length - 1]) &&
        typingValue === ""
      ) {
        history.pop();
        history.push(clickedButtonValue);
      }
      else if(clickedButtonValue === "clear"){
        history.length = 0;
        typingValue = '';
        outputElem.value = '';
      } 
      else if(clickedButtonValue === "mod"){
        history.push(clickedButtonValue);
        outputElem.value = typingValue * (-1);
        
      }
      else if(clickedButtonValue === "percentage"){
        history.push(Number.parseFloat(typingValue));
        outputElem.value = typingValue / 100;
        typingValue = '';

      }
      else {
        history.push(Number.parseFloat(typingValue));
        history.push(clickedButtonValue);
        typingValue = "";
        if (clickedButtonValue === "=") {
          calcHandler();
        }
      }
    }
    // calcHandler()
  }
});
