import React, { useState } from 'react';
import Main from '../Main';
import { Container } from './styles';

export default function Education() {
    const [id, setId] = useState('');

    async function handleEducation(e) {
        e.preventDefault();//evita que a pagina seja carregada automaticamente
        try {

        } catch (error) {
            alert('Falha no ...');
        }
    }
    //using styled-components
    return (


        <Container>
            <h1>EDUCATION</h1>

        </Container>



    );
}