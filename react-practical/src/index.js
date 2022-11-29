import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {

  function add(x, y) {
    return x + y
  }

  return <div>
    <h1> { add(10, 30) }</h1>
  </div>;
}

root.render(
  <div>
    <Greeting />
  </div>
);
