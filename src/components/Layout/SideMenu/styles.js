import styled from "styled-components";

export const Container = styled.div`
  flex-shrink: 0;
  height: 100vh;
  background-color: #403cfc;
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 16%;

  .ellipse img {
    height: 175px;
    width: 100%;
    border-radius: 50%;
    background-color: #3d9970;
    margin-top: 3vh;
  }

  .ellipse p {
    color: #ffffff;
    margin-top: 25px;
    font-size: 20px;
    display: flex;
    justify-content: center;
  }

  .about {
    text-decoration: none;
  }

  .portfolio {
    text-decoration: none;
  }

  .work {
    text-decoration: none;
  }

  .education {
    text-decoration: none;
  }

  .skills {
    text-decoration: none;
  }

  .ellipse p:hover {
    font-size: 22px;
  }
`;

