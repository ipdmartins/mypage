import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Header() {
  return (
    <Container>
      <div className="namesDiv">
        <p>
          Igor <b>Martins</b>
        </p>
      </div>
      <div className="iconsDiv">
        <a
          href="https://www.linkedin.com/in/ipdmartins/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            name="My Linkedin"
            className="linkedin"
            id="icon"
            size={50}
            color="#0072b1"
          />
        </a>

        <a
          href="https://github.com/ipdmartins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="github" id="icon" size={50} color="#24292e" />
        </a>

        <a
          href="https://www.instagram.com/ipdmartins/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="instagram"
            id="icon"
            size={50}
            color="#d6249f"
          />
        </a>

        <Link to="/Email">
          <AiOutlineMail
            className="email"
            id="icon"
            size={50}
            color="#716C6C"
          />
        </Link>
      </div>
    </Container>
  );
}
