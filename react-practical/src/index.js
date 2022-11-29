import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const married = false;

  return <h1>{ married ? 'Estoy Casado' : 'No Estoy Casado'}</h1>

}

root.render(
  <div>
    <Greeting />
  </div>
);

