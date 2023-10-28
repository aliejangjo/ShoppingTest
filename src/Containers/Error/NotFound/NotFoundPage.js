import React from 'react';
import './NotFoundPage.css'
import Container from '../../../Components/Container/Container';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <Container>
            <div className='main-404'>
                <div className='main-container'>
                    <h1>Not Found 404 :(</h1>
                    <p>It seems your Lost! Click here to go to home page <Link to='/'>Home</Link></p>
                </div>
            </div>
        </Container>
    );
}

export default NotFoundPage;
