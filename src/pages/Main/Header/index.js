import React, { useState } from 'react';
import { Container } from './styles';
import { Link, useHistory, Route } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BrowserRouter } from 'react-router-dom';

export default function Header() {

    async function handleLinkedin(e) {
        e.preventDefault();//evita que a pagina seja carregada automaticamente
        try {
            console.log('teste');
        } catch (error) {
            alert('Falha no ...');
        }
    }

    //using styled-components
    return (
        <Container>
            <div className='namesDiv'>
                <p className='igor'>IGOR</p>
                <p className='martins'>MARTINS</p>
            </div>
            <div className='iconsDiv'>

                <a href="https://www.linkedin.com/in/ipdmartins/?locale=en_US" target="_blank">
                    <FaLinkedin name="My Linkedin" className='linkedin' id="icon" size={50} color="#0072b1" />
                </a>

                <a href="https://github.com/ipdmartins" target="_blank">
                    <FaGithub className='github' id="icon" size={50} color="#24292e" />
                </a>

                <a href="https://www.instagram.com/ipdmartins/" target="_blank">
                    <FaInstagram className='instagram' id="icon" size={50} color="#fff" />
                </a>

                <Link to="/Email">
                    <AiOutlineMail className='email' id="icon" size={50} color="#716C6C" />
                </Link>

            </div>
        </Container >

    );
}