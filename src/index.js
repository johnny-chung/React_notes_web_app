import React from "react";
// React 17
// import ReactDOM from 'react-dom'
// React 18
import ReactDOM from "react-dom/client";
import App from "./component/App.jsx";

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strictmode, for development, will render twice to find bug
  // also check for updated react api
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// B4 react 18
// React
// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// )
