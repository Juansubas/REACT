import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const user = {
    firstName: 'ryan',
    lastName: 'Ray'
  }

  return <h1>{JSON.stringify()}</h1>;
}

root.render(
  <div>
    <Greeting />
  </div>
);
