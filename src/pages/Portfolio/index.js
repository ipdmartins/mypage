import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import mypage from "../../assets/mypage.png";
import solidity from "../../assets/solidity.png";
import blockchain from "../../assets/blockchain.jpg";
import harupic from "../../assets/harupic.png";
import algorithms from "../../assets/algorithms.png";
import chats from "../../assets/chats.png";

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
                <img src={solidity} alt="solidity" />
              </a>
            </div>
            <h2>My Solidity studies</h2>
            <h4>A course with <a
              href="https://www.linkedin.com/in/stephengrider/"
              target="_blank"
              rel="noopener noreferrer"
            >Stephen Grider</a>
            </h4>
          </div>

          <div class="flex-child magenta">
            <div id="imageDiv">
              <a
                href="https://github.com/ipdmartins/My1st_Blockchain_Code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={blockchain} alt="blockchain1st" />
              </a>
            </div>
            <h2>My Blockchain studies</h2>
            <h4>A course with <a
              href="https://www.linkedin.com/in/eric-traub-76b38953/"
              target="_blank"
              rel="noopener noreferrer"
            >Eric Traub</a>
            </h4>
          </div>
        </div>

        <div class="flex-container">
          <div class="flex-child magenta">
            <div id="imageDiv">
              <a
                href="https://github.com/ipdmartins/DesignPatterns_Haru-Ichiban"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={harupic} alt="Haru project" />
              </a>
            </div>
            <h2>Design patterns project</h2>
            <h4>Academic code based on a board game</h4>
          </div>

          <div class="flex-child green">
            <div id="imageDiv">
              <a
                href="https://github.com/ipdmartins/-Algorithms_data_structures-SuperTrunfo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={algorithms} alt="Algorithms and data structure" />
              </a>
            </div>
            <h2>Algorithms data structures</h2>
            <h4>Academic code based on a card game</h4>
          </div>

          <div class="flex-child green">
            <div id="imageDiv">
              <a
                href="https://github.com/ipdmartins/DistributedChat-cliente"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={chats} alt="Distributed chat" />
              </a>
            </div>
            <h2>Distributed chat</h2>
            <h4>Academic assignment to build a chat</h4>
          </div>
        </div>

      </Container>
    </Layout>
  );
}
