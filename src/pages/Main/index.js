import React, { useState } from 'react';
import SideMenu from './SideMenu';
import Header from './Header';
import { Title, Container } from './styles';

export default function Main() {
    const [id, setId] = useState('');

    async function handleMain(e) {
        e.preventDefault();//evita que a pagina seja carregada automaticamente
        try {

        } catch (error) {
            alert('Falha no ...');
        }
    }
    //using styled-components
    return (
        <Container>
            <SideMenu />
            <Header />

        </Container>

    );
}