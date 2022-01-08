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
                    <h3>R$28/mês</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                    <button>Assinar</button>
                </div>
                <div className='carder'>
                    <h2>Prata</h2>
                    <div>preferido</div>
                    <h3>R$57/mês</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                    <button>Assinar</button>
                </div>
                <div className='carder'>
                    <h2>Ouro</h2>
                    <h3>R$94/mês</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    </p>
                    <button>Assinar</button>
                </div>
            </div>
        </div>
    );
};
