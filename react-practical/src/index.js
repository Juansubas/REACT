import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const married = true

  return <div>
    <h1> { married.toString() }</h1>
  </div>;
}

root.render(
  <div>
    <Greeting />
  </div>
);
