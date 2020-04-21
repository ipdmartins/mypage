import React, { useState } from 'react';

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
        <div>
            <section className="form">
                <img src={""} alt='be the hero' />
                <form onSubmit={handleEducation}>

                </form>
            </section>
            <img src={""} alt="Heroes" />
        </div>

    );
}