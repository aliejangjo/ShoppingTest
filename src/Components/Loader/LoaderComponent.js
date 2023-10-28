import React from 'react';
import './LoaderComponent.css'
import Backdrop from '../Backdrop/Backdrop';

const LoaderComponent = () => {
    return (
        <Backdrop>
            <div className='loader-main'>
                <div className="dot-spinner">
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                </div>
            </div>
        </Backdrop>
    );
}

export default LoaderComponent;
