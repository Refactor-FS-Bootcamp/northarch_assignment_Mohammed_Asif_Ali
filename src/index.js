import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppContext from "./components/AppContext";

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById("root")
);
