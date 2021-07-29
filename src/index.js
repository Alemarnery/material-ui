import React from "react";
import ReactDOM from "react-dom";
import ButtonComponent from "./Components/ButttonComponent.jsx";
import IconComponent from "./Components/IconComponent.jsx";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <ButtonComponent />
      <IconComponent />,
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
