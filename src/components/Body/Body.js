import React from "react";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import ItemCard from "../../Atoms/ItemCard";

import { Container, ContainerCard, RctPageContent } from "./style";

const Body = () => {
  const { data: products } = useFetchProduct();

  console.log(products);
  return (
    <Container>
      <div className="rct-page">
        <div className="content-wrapper">
          <RctPageContent>
            <ul>
              <li>
                {products.map((produc) => (
                  <ContainerCard>
                    <ItemCard key={produc.id} {...produc} />
                  </ContainerCard>
                ))}
              </li>
            </ul>
          </RctPageContent>
        </div>
      </div>
    </Container>
  );
};

export default Body;
