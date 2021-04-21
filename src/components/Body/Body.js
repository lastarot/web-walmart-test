import React, { useState, useEffect } from "react";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import ItemCard from "../../Atoms/ItemCard";

import { Container, ContainerCard, RctPageContent } from "./style";
import Pagination from "../Paginator/Pagination";

const Body = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const { data: products } = useFetchProduct();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <div className="rct-page">
        <div className="content-wrapper">
          <RctPageContent>
            <ul>
              {currentPosts.map((produc) => (
                <li>
                  <ContainerCard>
                    <ItemCard key={produc.id} {...produc} />
                  </ContainerCard>
                </li>
              ))}
            </ul>
          </RctPageContent>
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </Container>
  );
};

export default Body;
