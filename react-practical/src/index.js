import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import {Button} from './Button'
import {TaskCard} from './Task'

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value)  
}

root.render(
  <>
    <TaskCard ready={true}/>
    <Button text="Saludar" />
    <input id="hola" onChange={handleChange}/>
  </>
);
