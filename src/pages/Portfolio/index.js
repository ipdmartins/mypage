import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import mypage from "../../assets/mypage.png";
import solidity from "../../assets/solidity.png";

const Container = styled.div`

  h1{
    margin: 4vh 1vw 0 1vw;
    
  }
  .flex-container {
    display: flex;
  }

  .flex-child {
    flex: 3;
    border: 1px solid #e0e0d1;
    margin: 4vh 1vw 2vh 1vw;
    height: 250px;
    box-shadow: 1px 1px 1px 1px #ccc;
    background-color: #f2f2f2;
  }  

  .flex-child h2{
    margin: 1% 0 2% 2%;
  }

  .flex-child h4{
    margin: 1% 0 2% 2%;
  }

  #imageDiv{
    background-color: green;
    margin: 2% 2% 0 2%;
    width: 96%;
    height: 70%;
  }

  #imageDiv:hover{
    transform: scale(1.02);
    filter: brightness(1.05);
  }

`;

export default function Portfolio() {
  return (
    <Layout>
      <Container>
        <h1>Here you can find some codes that I have done!</h1>

        <div class="flex-container">
          <div class="flex-child magenta">
            <div id="imageDiv">
              <a
                href="https://github.com/ipdmartins/mypage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mypage} alt="my image page" />
              </a>

            </div>
            <h2>My webpage</h2>
            <h4>It's built with ReactJS</h4>
          </div>

          <div class="flex-child green">
            <div id="imageDiv">
              <a
                href="https://lnkd.in/dngcEsz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={solidity} alt="my image page" />
              </a>
            </div>
            <h2>My Solidity studies</h2>
            <h4>Course with Stephen Grider</h4>
          </div>

          <div class="flex-child magenta">
            <div id="imageDiv">
              image
            </div>
            Flex Column 3
          </div>
        </div>

        <div class="flex-container">
          <div class="flex-child magenta">
            <div id="imageDiv">
              image
            </div>
            Flex Column 4
          </div>

          <div class="flex-child green">
            <div id="imageDiv">
              image
            </div>
            Flex Column 5
          </div>

          <div class="flex-child green">
            <div id="imageDiv">
              image
            </div>
            Flex Column 5
          </div>
        </div>

      </Container>
    </Layout>
  );
}
