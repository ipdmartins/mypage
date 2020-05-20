import styled from "styled-components";

export const Container = styled.header`
  flex-shrink: 0;
  height: 11vh;
  padding: 0 2vw 0 20vw;
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

  .instagram{
    width: 50px;
    height: 50px;
    border-radius: 40px;
    color: #fff;
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  }

  .iconsDiv a:not(:first-child) {
    margin-left: 24px;
  }

  #icon:hover {
    opacity: 0.5;
  }
`;
