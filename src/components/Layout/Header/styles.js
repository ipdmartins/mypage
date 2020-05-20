import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  padding: 0 24px;
  background-color: #dddce5;
  font-family: "Roboto", sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .namesDiv {
    text-transform: uppercase;
    font-size: 54px;
    font-weight: bold;
    justify-content: space-between;

    p {
      color: black;

      b {
        color: #403cfc;
      }
    }
  }

  .iconsDiv a:not(:first-child) {
    margin-left: 24px;
  }

  #icon:hover {
    opacity: 0.5;
  }
`;
