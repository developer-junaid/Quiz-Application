import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./swDev";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// Register the service worker
serviceWorker.register();
