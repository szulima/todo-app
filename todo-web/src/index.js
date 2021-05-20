import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <RecoilRoot> */}
    <Router>
      <App />
    </Router>
    {/* </RecoilRoot> */}
  </React.StrictMode>,
  document.getElementById("root")
);
