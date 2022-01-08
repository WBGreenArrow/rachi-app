import React from "react";
import ManWithNotebookImg from "../../assets/man-with-notebook.svg";
import "./styles.scss";

export const Features = () => {
    return (
        <div className='main' id='main'>
            <div className='main-text'>
                <h1>
                    Rachi,
                    <br /> é tudo que você precisa em um só lugar.
                </h1>
                <button>Cadastrar-se</button>
            </div>
            <img src={ManWithNotebookImg} alt='man-with-notebook' />
        </div>
    );
};
