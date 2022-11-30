import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () { alert('Hello')}}
    />

    <UserCard 
      name="Joe Mcmillan"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{
        street:"av some 123",
        city: 'new york'
      }}
      />
  </>
);
