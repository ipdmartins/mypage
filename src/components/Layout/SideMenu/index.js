import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import logoImg from "../../../assets/logoImg.png";

export default function SideMenu() {
  return (
    <Container>
      <div className="ellipse">
        <img src={logoImg} alt="my pic" />
        <Link className="about" id='sublinks' to="/">
          <p>About</p>
        </Link>
        <Link className="timeline" to="/Timeline">
          <p>Timeline</p>
        </Link>
        <Link className="portfolio" to="/Portfolio">
          <p>Portfolio</p>
        </Link>
        <Link className="skills" to="/Skills">
          <p>Skills</p>
        </Link>
      </div>
    </Container>
  );
}
