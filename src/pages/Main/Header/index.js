import React, { useState } from 'react';
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

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
            <p>IGOR</p>
            <p>MARTINS</p>
            <Link className='linkedin' to="/profile">
                <FaLinkedin size={16} color="#0072b1" />
            </Link>
        </Container>

    );
}