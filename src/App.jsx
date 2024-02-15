import React from "react";
import "./App.scss";
import Result  from "./components/Result/Result";
import Keyboard from "./components/Keyboard/Keyboard";
const App = () => {
  let [newValue,setNewValue] = React.useState(""); 
  let [calculator,setCalculator] = React.useState("");
  return (
    <div className="container">
      <div id="app">
        <Result valueKey={calculator === "" && newValue === "" ? calculator : (calculator === "" ? newValue : calculator)} />
        <Keyboard newValue={newValue} calculator={calculator} setCalculator={setCalculator} setNewValue={setNewValue}/>
      </div>
    </div>
  );
};

export default App;
