import React from "react";
import Products from "../Products";

const Shoes = ({ title }) => {
  return (
    <section className="shoes">
      <h2>{title}</h2>
      <div className="products">
        <Products
          image="running-shoes.jpg"
          name="Běhací tenisky"
          description="Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost."
          price={1790}
        />
        <Products
          image="shiny-shoes.jpg"
          name="Třpytivé lodičky"
          description="Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět."
          price={2950}
        />
        <Products
          image="red-shoes.jpg"
          name="Červené botičky"
          description="Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet."
          price={6200}
        />
      </div>
    </section>
  );
};

export default Shoes;
