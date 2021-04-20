import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(0, 113, 206);
  height: 58px;

  img {
    width: 152px;
    height: 35px;
    margin-top: 12px;
    margin-bottom: 6px;
  }

  input {
    border-radius: 26px;
    height: 35px;
    font-size: 16px;
    padding: 0.2rem 2.2rem;
    margin: 0.4rem 0.3rem;
    width: 100%;
    position: relative;
    background-color: #fff;
    border: 1px solid #c4c8d8;
  }
  button {
    position: absolute;
    top: 26px;
    left: 1rem;
    z-index: 1;
    right: 0.3rem;
    background: 0 0;
    border: 0;
  }
  svg {
    width: 14px;
    height: 14px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  form {
    display: block;
    position: relative;
  }
`;
export const BarSearch = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  width: 100%;
`;

export const ContainerInput = styled.div`
  width: 60%;
  margin: 0px 3%;
  font-size: 1rem;
`;
