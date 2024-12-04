import React, { useState } from "react";
import DynamicButton from "./components/DynamicButton";
import "./App.css";

const App: React.FC = () => {
  const [buttonType, setButtonType] = useState<"primary" | "secondary">("primary");

  const toggleButtonType = () => {
    setButtonType((prev) => (prev === "primary" ? "secondary" : "primary"));
  };

  return (
    <div className="App">
      <h1>Dynamic Komponent Misoli</h1>
      <DynamicButton
        color="red"
        label="Dynamic Tugma"
        onClick={toggleButtonType}
        type={buttonType}
      />
      <p>Hozirgi tugma turi: {buttonType}</p>
    </div>
  );
};

export default App;
