import React, { useState } from 'react';

export default function Home() {
    const [id, setId] = useState('');

    async function handleHome(e) {
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
                <form onSubmit={handleHome}>

                </form>
            </section>
            <img src={""} alt="Heroes" />
        </div>

    );
}