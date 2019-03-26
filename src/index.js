import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initAmplitude } from "./utilities/amplitude";

initAmplitude();

ReactDOM.render(<App />, document.getElementById("root"));
