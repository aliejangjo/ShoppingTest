import React, { useEffect, useState } from 'react';
import './Offcanvas.css'
import Backdrop from '../Backdrop/Backdrop';
import { X } from 'react-bootstrap-icons';
import Button from '../Button/Button/Button';
import { useLocation } from 'react-router-dom';

const Offcanvas = (props) => {
    const [show, setShow] = useState(false)
    const location = useLocation()
    const ShowCanvas = () => {
        setShow(true)
    }
    const CloseCanvas = () => {
        setShow(false)
    }

    useEffect(() => {
        const close = document.querySelector('.close')
        close.addEventListener('click', CloseCanvas)
        setShow(false)
    } , [location])

    return (
        <>
            <div className='Canvas-button' onClick={ShowCanvas}>{props.button}</div>
            <div className={`Offcanvas ${show === true ? 'Active' : 'disable'}`}>
                <div className='Offcanvas-main'>
                    <div className='Offcanvas-body'>
                        {props.children}
                    </div>
                </div>
            </div>
            {show ? <Backdrop click={CloseCanvas}></Backdrop> : ''}
        </>
    );
}

const Title = (props) => {
    return (
        <div className='Offcanvas-title '>
            <div>
                {props.children}
            </div>
            <div>
                <Button click={props.closeCanvas} class='pointer a p-0 close'><X size={35} /></Button>
            </div>
        </div>
    )
}

const Body = (props) => {
    return (
        <div className='Offcanvas-content'>
            {props.children}
        </div>
    )
}
const Footer = (props) => {
    return (
        <footer className='Offcanvas-footer'>
            {props.children}
        </footer>
    )
}

Offcanvas.title = Title
Offcanvas.body = Body
Offcanvas.footer = Footer

export default Offcanvas;
