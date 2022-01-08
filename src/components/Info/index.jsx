import React from "react";
import "./styles.scss";
import AddIcon from "../../assets/addIcon.png";
import VerifyIcon from "../../assets/verifyIcon.png";
import FaceIcon from "../../assets/faceIcon.png";

export const Info = () => {
    return (
        <div className='main-info' id='info'>
            <h1>Como funciona</h1>
            <div className='info-carder'>
                <div className='carder'>
                    <img src={AddIcon} alt='img-add-user' />
                    <h2>Crie Conexões</h2>
                    <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>
                <div className='carder'>
                    <img src={VerifyIcon} alt='verify-icon' />
                    <h2>100% gratuito</h2>
                    <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>
                <div className='carder'>
                    <img src={FaceIcon} alt='face-icon' />
                    <h2>Compartilhamento</h2>
                    <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>
            </div>
        </div>
    );
};
