import React from "react";
import ReactDOM from "react-dom/client";
import { Post } from "./Posts";


const root = ReactDOM.createRoot(document.getElementById("root"));

const user = [
  {
    id: 1,
    name: 'Juan xd',
    image: 'https://robohash.org/user1'
  },
  {
    id: 1,
    name: 'Joe xd',
    image: 'https://robohash.org/user2'
  }
]

root.render(
  <>
    <Post/>
  </>
);
