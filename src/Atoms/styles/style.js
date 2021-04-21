import styled from "styled-components";

export const Card = styled.div`
  button {
    cursor: pointer;
    width: 145px;
    height: 32px;
    border-radius: 23px;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 25%);
    background-color: #fff;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 700;
    letter-spacing: 0.4px;
    color: #0071ce;
  }
`;
export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 220px;
  width: 100%;
  overflow: hidden;
  position: relative;
  .alguin-venter {
    text-align: center !important;
  }
  img {
    filter: unset;
    min-width: 50px;
    max-height: 220px;
  }
`;
export const Separator = styled.div`
  z-index: 1;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 4px;
  position: absolute;
  background-blend-mode: multiply;
  background-image: linear-gradient(
    rgba(249, 249, 249, 0),
    rgba(0, 0, 0, 0.12)
  );
`;

export const InfoProduct = styled.div`
  padding: 0.7rem;
  .product-description {
    font-size: 16px;
    font-weight: 400;
    color: #6d6e71;
    line-height: 1.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .brand {
    font-weight: bold;
    color: rgb(0, 0, 0);
  }
`;
