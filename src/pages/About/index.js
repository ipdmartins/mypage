import React from "react";
import styled from "styled-components";
import { FaRegHandPointRight } from "react-icons/fa";
import YouTube from 'react-youtube';

import Layout from "../../components/Layout";

const Container = styled.div`
  margin-left: 2vw;

  .blockleft{
    float: left;
    width: 35vw;
  }
  .blockright{
    float: right;
    width: 35vw;
    margin-right:5vw;
  }

  #itemlist{
    flex-shrink: 0;
    display: flex;
    margin-bottom: 1vh;
  }
  #itemlist p{
    margin-left: 1vw;
    text-align:justify;
  }
  h2{
    text-decoration-line: underline;
    text-decoration-style: double;
    margin: 5vh 0 3vh 0;
  }
`;

export default function About() {
  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts = {
    height: '350',
    width: '550',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };

  return (
    <Layout>
      <Container>
        <div className="blockleft">
          <h2>Currently</h2>
          <div id="itemlist">
            <FaRegHandPointRight size={20} color="#0072b1" />
            <p>Student of Software Engineering at the Public University (UDESC);</p>
          </div>
          <div id="itemlist">
            <FaRegHandPointRight size={20} color="#0072b1" />
            <p>Software developer intern at EMPDS UDESC;</p>
          </div>
          <div id="itemlist">
            <FaRegHandPointRight size={20} color="#0072b1" />
            <p>Java background and improving Javascript and Node;</p>
          </div>
          <div id="itemlist">
            <FaRegHandPointRight size={20} color="#0072b1" />
            <p>Blockchain and Smart Contracts admirer and learner.</p>
          </div>
        </div>

        <div className="blockright">
          <h2>Previously</h2>
          <div id="itemlist">
            <FaRegHandPointRight size={26} color="#0072b1" />
            <p>Professional experiences in banking, and innovation consulting for small businesses;</p>
          </div>
          <div id="itemlist">
            <FaRegHandPointRight size={20} color="#0072b1" />
            <p>Graduated  in Business Administration in 2009;</p>
          </div>

          <div id="itemlist">
            <FaRegHandPointRight size={20} color="#0072b1" />
            <p>Stock market studies and practices.</p>
          </div>
        </div>

        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />;
      </Container>
    </Layout>
  );
}
