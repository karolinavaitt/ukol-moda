import React from "react";
import "./style.css";

const Products = ({ image, name, description, price }) => {
  return (
    <div className="product">
      <img
        className="product__image"
        src={`/assets/${image}`}
        alt={`/assets/${name}`}
      />
      <div className="product__content">
        <h3 className="product__name">{name}</h3>
        <p className="product__description">{description}</p>
        <p className="product__price">{price} Kč</p>
      </div>
    </div>
  );
};

export default Products;
