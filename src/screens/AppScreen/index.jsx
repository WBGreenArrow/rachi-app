import React from "react";
import "./styles.scss";
import GooglePlayBtnImg from "../../assets/googlePlayButton.png";
import AppleStoreButton from "../../assets/appleStoreButton.png";
import ManWithSmartphoneImg from "../../assets/boy-with-smartphone.svg";

export const AppScreen = () => {
    return (
        <div className='app-screen' id='app'>
            <div className='app-bg'>
                <div className='app-text'>
                    <h1>Baixe nosso app para desfrutar mais!</h1>
                    <p>
                        Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet
                        vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.
                    </p>
                    <div className='app-btn'>
                        <img src={GooglePlayBtnImg} alt='googleplay-btn' />
                        <img src={AppleStoreButton} alt='applestore-btn' />
                    </div>
                </div>
                <img className='img-background' src={ManWithSmartphoneImg} alt='boy-with-smartphone' />
            </div>
        </div>
    );
};
