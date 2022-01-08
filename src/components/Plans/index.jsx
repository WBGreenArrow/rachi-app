import React from "react";
import "./styles.scss";

export const Plans = () => {
    return (
        <div className='container'>
            <div className='container-header'>
                <h1>Nossos Planos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
            </div>
            <div className='container-carders'>
                <div className='carder'>
                    <h2>Bronze</h2>
                    <div className='price'>
                        <h3>R$</h3>
                        <h3>28</h3>
                        <h3>/mês</h3>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                    <button>Assinar</button>
                </div>
                <div className='carder'>
                    <h2>Prata</h2>
                    <label>preferido</label>
                    <div className='price'>
                        <h3>R$</h3>
                        <h3>57</h3>
                        <h3>/mês</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                    <button>Assinar</button>
                </div>
                <div className='carder'>
                    <h2>Ouro</h2>
                    <div className='price'>
                        <h3>R$</h3>
                        <h3>94</h3>
                        <h3>/mês</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                    <button>Assinar</button>
                </div>
            </div>
        </div>
    );
};
