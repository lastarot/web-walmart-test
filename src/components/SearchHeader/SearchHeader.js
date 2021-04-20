import React from "react";
import Search from "../../Atoms/Search";
import BtnSearch from "../../Atoms/BtnSearch";

//style
import { Container, BarSearch, ContainerInput } from "./SearchHeader.style";

import Icono from "./img/lider-logo.svg";

const searchHeader = () => {
  return (
    <Container>
      <BarSearch>
        <img src={Icono}></img>

        <ContainerInput>
          <form>
            <Search />
            <BtnSearch />
          </form>
        </ContainerInput>
      </BarSearch>
    </Container>
  );
};

export default searchHeader;
