import React from "react";
import Description from "./Description";
import PropsTypes from "prop-types";

import { Card, ContainerImg, Separator } from "./styles/style";

const ItemCard = ({ marca, descripcion, valor, img }) => {
  return (
    <Card>
      <ContainerImg>
        <div className="alguin-venter">
          <Separator></Separator>
          <img src={img} />
        </div>
      </ContainerImg>
      <Description desc={descripcion} marca={marca} valor={valor} />
    </Card>
  );
};
ItemCard.prototype = {
  marca: PropsTypes.string.isRequired,
  descripcion: PropsTypes.string.isRequired,
  valor: PropsTypes.number.isRequired,
  img: PropsTypes.string.isRequired,
};

export default ItemCard;
