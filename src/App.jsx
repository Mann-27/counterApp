import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0); //useState is a type of hook,which  always give 2 things in array,first is the variable and second is method

  const addValue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);

      if (counter >= 20)
        document.querySelector("p").innerHTML = `Max limit reached`;
      console.log("Max limit reached.");
      console.log("clicked", counter);
    }
    const removeValue = () => {
      if (counter > 0) {
        setCounter((prevCounter) => prevCounter - 1);
      }
      if (counter <= 0)
        document.querySelector("p").innerHTML = `Min limit reached`;
      console.log("clicked", counter);
    };
    return (
      <>
        <h1>Mann is learning react </h1>
        <h2>Counter value:{counter}</h2>
        <button onClick={addValue}>Add value</button>
        <button onClick={removeValue}>remove value</button>
        <p></p>
      </>
    );
  };
}

export default App;
