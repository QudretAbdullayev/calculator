import React from "react";
import "./Result.scss";

const Result = ({valueKey}) => {
  return (
    <div className="result-group">
      <span id="result">{valueKey}</span>
      <small className={valueKey.toString().length<13 ? "alert" : "alert active"}>exceeded the process limit</small>
    </div>
  );
};

export default Result;

