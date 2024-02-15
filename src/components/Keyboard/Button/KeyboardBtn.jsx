import React from "react";
import "./KeyboardBtn.scss";

const KeyboardBtn = ({ mission, value, clickHandler, icon, active }) => {
  active = active ? "active" : "";
  return (
    <div onClick={clickHandler} className={`keyboard-btn ${mission} ${active}`}>
      {icon ? icon : value}
    </div>
  );
};

export default KeyboardBtn;
