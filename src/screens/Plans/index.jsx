import React from "react";
import { Carder } from "../../components/Carder";
import "./styles.scss";

export const Plans = () => {
    return (
        <div className='container' id='plans'>
            <div className='container-header'>
                <h1>Nossos Planos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                <div className='container-carders'>
                    <Carder title={"Bronze"} price='28' />
                    <Carder title={"Prata"} price='54' prefer={true} />
                    <Carder title={"Ouro"} price='98' />
                </div>
            </div>
        </div>
    );
};
