import React from "react";
import ReactDOM from "react-dom/client";
import {  Greeting, UserCard } from './Greeting';
import Product, {Navbar} from './Product'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting title="Hola Mundo" name="Joe"/>
    <Greeting title="Hola React" lastname="Doe"/>
    <Greeting title="Hola JSX" />
    <Greeting title="Hola JavaScript" />
    <Greeting title="Hola Juan" />
  </>
);
