import { v4 as uuidv4 } from "uuid";
import { FaDivide, FaPlus, FaMinus } from "react-icons/fa";
import { GrClose as Multiple } from "react-icons/gr";

import Decimal from 'decimal.js';

export const buttonsData = {
  values: [
    { id: uuidv4(), value: "0", mission: "value" },
    { id: uuidv4(), value: "1", mission: "value" },
    { id: uuidv4(), value: "2", mission: "value" },
    { id: uuidv4(), value: "3", mission: "value" },
    { id: uuidv4(), value: "4", mission: "value" },
    { id: uuidv4(), value: "5", mission: "value" },
    { id: uuidv4(), value: "6", mission: "value" },
    { id: uuidv4(), value: "7", mission: "value" },
    { id: uuidv4(), value: "8", mission: "value" },
    { id: uuidv4(), value: "9", mission: "value" },
  ],
  operators: [
    { id: uuidv4(), icon: FaDivide, value: "/", mission: "operator" },
    { id: uuidv4(), icon: Multiple, value: "*", mission: "operator" },
    { id: uuidv4(), icon: FaMinus, value: "-", mission: "operator" },
    { id: uuidv4(), icon: FaPlus, value: "+", mission: "operator" },
  ],
  dot: { id: uuidv4(), value: ".", mission: "value" },
  clear: { id: uuidv4(), value: "C", mission: "clear" },
  result: { id: uuidv4(), value: "=", mission: "operator" },
};

export const keyParameter = {
  "+": function(a,b){return Math.round((Number(a)+Number(b))*1000000000000000)/1000000000000000},
  "-": function(a,b){return Math.round((Number(a)-Number(b))*1000000000000000)/1000000000000000},
  "*": function(a,b){return Math.round(Number(a)*Number(b)*1000000000000000)/1000000000000000},
  "/": function(a,b){return Math.round(Number(a)/Number(b)*1000000000000000)/1000000000000000},
  "=": function(a){return a},
}

// export const keyParameter = {
//   "+": function(a,b){return (new Decimal(a).plus(b).toString())},
//   "-": function(a,b){return (new Decimal(a).minus(b).toString())},
//   "*": function(a,b){return (new Decimal(a).times(b).toDecimalPlaces(13).toString())},
//   "/": function(a,b){return (new Decimal(a).dividedBy(b).toDecimalPlaces(13).toString())},
//   "=": function(a){return new Decimal(a)},
// }
