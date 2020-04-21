import React, { useState } from 'react';

export default function Work() {
    const [id, setId] = useState('');

    async function handleWork(e) {
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
                <form onSubmit={handleWork}>

                </form>
            </section>
            <img src={""} alt="Heroes" />
        </div>

    );
}