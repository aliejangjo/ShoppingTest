import React, { useEffect, useState } from 'react';
import Container from '../../Components/Container/Container';

import './BeforeHeader.css'
import { Moon, Sun, Telephone } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button/Button';

const BeforeHeader = () => {
    const body = document.querySelector('body')
    const bodyAtt = body.getAttribute('data-theme')
    const [theme, setTheme] = useState(bodyAtt)

    const ChangeTheme = () => {
        
        switch (theme) {
            case 'dark':
                return setTheme('light')
            case 'light':
                return setTheme('dark')
        }
    }

    useEffect(() => {
       body.setAttribute('data-theme' , theme)
       localStorage.setItem('theme' , JSON.stringify(theme))
    }, [theme])

    return (
        <Container>
            <div className='before-nav-parent'>
                <div className='before-nav-text'>
                    <p>Have a nice Shopping and if you have any Problem just ask!</p>
                </div>
                <div className='before-nav-icons'>
                    <Link to='/Contact'><Telephone className='before-nav-icon' size={20} /></Link>
                    <Button class="pointer a" click={ChangeTheme}>{theme === 'dark' ? <Sun className='before-nav-icon' size={20} /> : <Moon className='before-nav-icon' size={20} />}</Button>
                </div>
            </div>
        </Container>
    );
}

export default BeforeHeader;
