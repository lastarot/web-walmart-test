import React from "react";

const Description = ({ desc, marca, valor }) => {
  let isRender = true;
  return (
    <>
      <div>
        <spam>{marca}</spam> <spam>{desc}</spam>
        <h3>{valor}</h3>
      </div>
      <div>{isRender && <button>agregar</button>}</div>
    </>
  );
};

export default Description;
