import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarUl from './Ul/NavbarUl';
import { List, Person } from 'react-bootstrap-icons';
import './Nav.css'
import CheckoutOffCanvas from '../Checkout/Offcanvas/CheckoutOffCanvas';

const Nav = () => {
    const [collapse, setCollapse] = useState(false)

    // useEffect(() => {
    //     document.getElementById('collapse').addEventListener('click', (e) => {
    //         console.log('h');
    //         setCollapse(!collapse)
    //     })
    // }, [setCollapse])

    return (
        <nav className='nav'>
            <div className='nav-main'>
                <div className='left'>
                    <div>
                        <h2><Link to='/'>Store</Link></h2>
                    </div>
                    <div className='navbarul'>
                        <NavbarUl direction='flex-row' display='d-flex' />
                    </div>
                </div>
                <div className='right'>
                    <Link to='/Account'><Person size={25} /></Link>
                    <CheckoutOffCanvas />
                    <button onClick={() => setCollapse(!collapse)} className='collapse' id='collapse'><List size={30} /></button>
                </div>
            </div>
            <div className={`sm-nav-main ${collapse === true ? 'nav-collapse' : ''}`}>
                <NavbarUl collapse={collapse} setCollapse={setCollapse} dropdownType='relative' direction='flex-column' display='d-flex' />
            </div>
        </nav>
    );
}

export default Nav;
