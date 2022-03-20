import React from "react";
import Products from "../Products";
import "./style.css";

const Dresses = ({ title }) => {
  return (
    <section className="dresses">
      <h2>{title}</h2>
      <div className="products">
        <Products
          image="red-dress.jpg"
          name="Červené šaty"
          description="V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií."
          price={2290}
        />
        <Products
          image="flower-dress.jpg"
          name="Květované šaty"
          description="Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat."
          price={3100}
        />
        <Products
          image="yellow-dress.jpg"
          name="Žluté šaty"
          description="Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě."
          price={4250}
        />
      </div>
    </section>
  );
};

export default Dresses;
