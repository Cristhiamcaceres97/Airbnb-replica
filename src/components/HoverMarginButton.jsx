// HoverMarginButton.js
import React, { useState } from "react";

const HoverMarginButton = ({ children }) => {
  const [marginAdded, setMarginAdded] = useState(false);

  const handleButtonClick = () => {
    setMarginAdded(true);
  };

  const buttonStyle = {
    marginBottom: marginAdded ? "20px" : "0",
  };

  return (
    <button onClick={handleButtonClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default HoverMarginButton;
