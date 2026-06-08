import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  a {
    display: flex;
    flex-direction: row;
    gap: 16px;
    color: #0366d6;
    text-decoration: none;
    font-size: 16px;
  }

  button.remover {
    background: #f00;
    border: none;
    padding: 5px 0;
    color: #fff;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
