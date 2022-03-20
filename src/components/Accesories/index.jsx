import React from "react";
import Products from "../Products";
import "./style.css";

const Accesories = ({ title }) => {
  return (
    <section className="accesories">
      <h2>{title}</h2>
      <div className="products">
        <Products
          image="blue-handbag.jpg"
          name="Modrá kabelka"
          description="Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti."
          price={3590}
        />
        <Products
          image="grey-scarf.jpg"
          name="Šedá vlněná šála"
          description="Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné."
          price={970}
        />
        <Products
          image="glasses.jpg"
          name="Brýle"
          description="Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly.."
          price={1620}
        />
      </div>
    </section>
  );
};

export default Accesories;
