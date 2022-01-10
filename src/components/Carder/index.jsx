import React from "react";
import "./styles.scss";

export const Carder = ({ title, price, prefer }) => {
    return (
        <>
            <div className={prefer ? "carder-prefer" : "carder"}>
                <h2>{title}</h2>
                {prefer ? (
                    <>
                        <label>preferido</label>
                        <div>
                            <div className='price'>
                                <h3>R$</h3>
                                <h3>{price}</h3>
                                <h3>/mês</h3>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='price'>
                        <h3>R$</h3>
                        <h3>{price}</h3>
                        <h3>/mês</h3>
                    </div>
                )}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                <button>Assinar</button>
            </div>
        </>
    );
};
