import React from "react";
import ReactDOM from "react-dom/client";
import {  Greeting, UserCard } from './Greeting';
import Product, {Navbar} from './Product'

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
