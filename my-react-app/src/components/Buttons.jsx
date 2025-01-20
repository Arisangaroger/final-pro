import React from "react";

const Buttons = ({ children, onClick, color="primary"}) => {
  return (
    <button className={" btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttons;
