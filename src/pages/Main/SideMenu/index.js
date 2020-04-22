import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Title, Container } from './styles';
import logoImg from '../../../assets/logoImg.png';

export default function SideMenu() {
    const [id, setId] = useState('');

    async function handleSideMenu(e) {
        e.preventDefault();//evita que a pagina seja carregada automaticamente
        try {

        } catch (error) {
            alert('Falha no ...');
        }
    }
    //using styled-components
    return (
        <Container>
            <div className="ellipse">
                <img src={logoImg} alt='my pic' />
                <Link className='about' to="/">
                    <p>About</p>
                </Link>
                <Link className='portfolio' to="/">
                    <p>Portfolio</p>
                </Link>
                <Link className='work' to="/">
                    <p>Work Experience</p>
                </Link>
                <Link className='education' to="/">
                    <p>Education</p>
                </Link>
                <Link className='skills' to="/">
                    <p>Skills</p>
                </Link>
            </div>
        </Container>

    );
}