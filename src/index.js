import React from "react";
import ReactDOM from "react-dom";
import Tasks from "./Tasks.jsx";

// https://picturepan2.github.io/spectre/getting-started.html
import "spectre.css/dist/spectre.min.css";

function App() {
  return <Tasks />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
