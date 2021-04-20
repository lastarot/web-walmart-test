import styled from "styled-components";

export const Container = styled.div`
  .rct-page {
    padding-right: 10px;
    padding-left: 12px;
    display: block;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .content-wrapper {
    padding-left: 9px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.75rem;
    margin-left: 9.25rem;
    border: 1px;
  }
  li {
    border: none;
    box-shadow: none;
    margin: 0 0 10px;
    padding: 3px;
    display: grid;
    max-width: 25%;
  }
`;

export const ContainerCard = styled.div`
  height: 380px;
  border-radius: 16px;
  box-shadow: 0 0 12px 0 #e6e5e5;
  border: none;
  transition: all 0.4s ease-in-out 0s;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  justify-content: space-between !important;
  flex-direction: column !important;
`;
export const RctPageContent = styled.div`
  margin-top: 12px;
  font-size: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;
