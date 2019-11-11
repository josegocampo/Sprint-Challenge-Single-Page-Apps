import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Chars from "./components/Chars";


export default function App() {
  return (
<main>
<Route exact path ="/" component ={HomePage}/>
<Route exact path ="/chars/:id" component ={Chars}/>

</main>

  );
}
