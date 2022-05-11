import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "animate.css";
import "./styles/styles.scss";
import { DataProvider } from "./context/DataContex";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
