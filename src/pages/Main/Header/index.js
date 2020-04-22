import React, { useState } from 'react';
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export default function Header() {

    async function handleHeader(e) {
        e.preventDefault();//evita que a pagina seja carregada automaticamente
        try {

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
                <Link className='linkedin' to="/profile">
                    <FaLinkedin id="icon" size={50} color="#0072b1" />
                </Link>
                <Link className='github' to="/profile">
                    <FaGithub id="icon" size={50} color="#24292e" />
                </Link>
                <Link className='instagram' to="/profile">
                    <FaInstagram id="icon" size={50} color="#fff" />
                </Link>
                <Link className='email' to="/profile">
                    <AiOutlineMail id="icon" size={50} color="#716C6C" />
                </Link>
            </div>
        </Container>

    );
}