import React, { useState } from 'react';

export default function Skills() {
    const [id, setId] = useState('');

    async function handleSkills(e) {
        e.preventDefault();//evita que a pagina seja carregada automaticamente
        try {

        } catch (error) {
            alert('Falha no ...');
        }
    }
    //using styled-components
    return (
        <h1>SKILLS</h1>
    );
}