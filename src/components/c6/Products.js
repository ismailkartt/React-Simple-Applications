import React from "react";
import fruits from "./Fruits";

const Products = () => {
  const listFruits = fruits.map((urun, index) => (
    <li key={index} style={{ color: urun.isFruit ? "red" : "green" }}>
      {urun.title}
    </li>
  ));

  return <div>{listFruits}</div>;
};

export default Products;
