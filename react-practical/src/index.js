import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const name = "Juan";

  return <h1>{ name }</h1>
}

root.render(
  <div>
    <Greeting />
  </div>
);

