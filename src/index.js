import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Tässä yhdistetään App-komponentti (App.js) html-tiedostossa olevaan
// root-elementtiin ReactDOM-kirjaston render-metodilla.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
