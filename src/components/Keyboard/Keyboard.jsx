import React from "react";
import "./Keyboard.scss";
import KeyboardBtn from "./Button/KeyboardBtn";
import { buttonsData } from "../../data/data";
import { keyParameter } from "../../data/data";

const Keyboard = ({newValue, calculator,setNewValue,setCalculator}) => {
  let [operatorKey,setOperator] = React.useState("");
  let [dotCounter,setDotCounter] = React.useState(0);
  const clickNumber = (parameter) =>{
    return function(){
      if(calculator.length<13){
        if(calculator===""){
          if(parameter!=="."){
            calculator += parameter 
            setCalculator(calculator)
          }
        }else{
          if((calculator.at(0)==="0")){
            if(parameter==="." && dotCounter==0){
              dotCounter += 1;
              setDotCounter(dotCounter)
              console.log(dotCounter)
              calculator += parameter
              setCalculator(calculator)
            }
            else if(calculator.at(1)!=="."){
              calculator = parameter 
              setCalculator(calculator)
            }else{
              if(parameter !=="."){
                calculator += parameter 
                setCalculator(calculator)
              }
            }
          }else{
            if(dotCounter==0){
              calculator += parameter 
              setCalculator(calculator)
              dotCounter += 1;
              setDotCounter(dotCounter)
            }else{
              if(parameter!=="."){
                calculator += parameter;
                setCalculator(calculator)
              }
            }
          }
        }
      }
    }
  }

  const clickOperator = (parameter) =>{
    return function(){
      if(calculator === ""){
        operatorKey = parameter;
        setOperator(operatorKey);
      }
      if(parameter==="C"){
        newValue = "";
        calculate(newValue,"");
      }
      else if(newValue==="" && calculator !==""){
        newValue = Number(calculator);
        calculate(newValue,parameter);
      }
      else if(newValue!==""){
        if(calculator !== ""){
          newValue = keyParameter[operatorKey](newValue,calculator);
          calculate(newValue,parameter)
        }
      }
    }
  }

  const calculate = (value,parameter) =>{
    newValue = value
    setNewValue(newValue)
    calculator = ""
    setCalculator(calculator)
    operatorKey = parameter;
    setOperator(operatorKey);
    dotCounter = 0;
    setDotCounter(dotCounter)
  }

  return (
    <>
      <div id="keyboard">
        <div className="row">
          <KeyboardBtn
            clickHandler={clickOperator(buttonsData.clear.value)}
            key={buttonsData.clear.id}
            mission={buttonsData.clear.mission}
            value={buttonsData.clear.value}
          />
          {buttonsData.operators.map((obj) => (
            <KeyboardBtn key={obj.id} mission={obj.mission} icon={<obj.icon />} clickHandler={clickOperator(obj.value)}/>
          ))}
        </div>
        <div className="row">
          {buttonsData.values.slice(0, 10).map((obj) => (
            <KeyboardBtn key={obj.id} mission={obj.mission} value={obj.value} clickHandler={clickNumber(obj.value)}/>
          ))}
        </div>
        <div className="row">
          <KeyboardBtn
            key={buttonsData.result.id}
            mission={buttonsData.result.mission}
            value={buttonsData.result.value}
            clickHandler={clickOperator(buttonsData.result.value)}
          />
          <KeyboardBtn
            key={buttonsData.dot.id}
            mission={buttonsData.dot.mission}
            value={buttonsData.dot.value}
            clickHandler={clickNumber(buttonsData.dot.value)}
          />
        </div>
      </div>
    </>
  );
};


export default Keyboard;

