import React from "react";
import { render } from "react-dom";
import "./style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dresses from "./components/Dresses";
import Shoes from "./components/Shoes";
import Accesories from "./components/Accesories";

const App = () => (
  <div class="container">
    <Header
      title="Móda"
      description="Stylové oblečení a doplňky pro každý den"
    />
    <Dresses title="Šaty" />
    <Shoes title="Boty" />
    <Accesories title="Doplňky" />
    <Footer year="2022" author="Karolina Vaittinen" />
  </div>
);

render(<App />, document.querySelector("#app"));
