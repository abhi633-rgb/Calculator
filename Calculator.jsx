import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const buttons = [
    "C", "⌫", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "⌫") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      
      
      <div className="display">
        {input || "0"}
      </div>

      
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

    </div>
  );
}