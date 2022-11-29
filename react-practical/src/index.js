import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const user = {
    firstName: 'ryan',
    lastName: 'Ray'
  }

  return <div>
    <h1> { user.firstName }</h1>
    <h3> { user.lastName } </h3>
  </div>;
}

root.render(
  <div>
    <Greeting />
  </div>
);
