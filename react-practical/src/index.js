import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from './Greeting';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </>
);
