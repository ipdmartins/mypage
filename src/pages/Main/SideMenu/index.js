import React, { useState } from 'react';
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
                <p>About</p>
                <p>Portfolio</p>
                <p>Work Experience</p>
                <p>Education</p>
                <p>Skilss</p>
            </div>
        </Container>

    );
}