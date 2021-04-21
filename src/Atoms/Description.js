import React from "react";

import { InfoProduct } from "./styles/style";

const Description = ({ desc, marca, valor }) => {
  let isRender = true;
  return (
    <>
      <InfoProduct>
        <div className="product-description">
          <spam className="brand">{marca}</spam> <spam>{desc}</spam>
        </div>
        <h3>{valor}</h3>
      </InfoProduct>
      <div>{isRender && <button>agregar</button>}</div>
    </>
  );
};

export default Description;
