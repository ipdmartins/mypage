import React, { useState } from 'react';

export default function Portfolio() {
    const [id, setId] = useState('');

    async function handlePortfolio(e) {
        e.preventDefault();//evita que a pagina seja carregada automaticamente
        try {

        } catch (error) {
            alert('Falha no ...');
        }
    }
    //using styled-components
    return (
        <h1>Portfolio</h1>
    );
}