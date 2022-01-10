import React from "react";
import { Carder } from "../../components/Carder";
import "./styles.scss";

export const About = () => {
    return (
        <div className='container' id='about'>
            <div className='about-img'>
                <div className='about-img-filter'>
                    <h1>Contato</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                    <form action='#'>
                        <input type='text' placeholder='Seu melhor e-mail' />
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
            <footer>Rachi - Todos os direitos reservados.</footer>
        </div>
    );
};
