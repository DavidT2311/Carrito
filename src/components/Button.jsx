import React, { useEffect, useState } from "react";
//Styles
import buttonModule from "./Button.module.css";

const Button = ({ handleEvent, text, classes }) => {
  const [classText, setClassText] = useState("");

  useEffect(() => {
    if (classes == "green") setClassText(buttonModule.green);
    if (classes == "blue") setClassText(buttonModule.blue);
    if (classes == "red") setClassText(buttonModule.red);
  }, [text]);

  return (
    <button onClick={handleEvent} className={classText}>
      {text}
    </button>
  );
};

export default Button;
