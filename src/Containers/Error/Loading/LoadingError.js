import React from 'react';
import Container from '../../../Components/Container/Container';
import { Link } from 'react-router-dom';
import './LoadingError.css'

const LoadingError = () => {
    return (
        <Container>
            <div className='main'>
                <div className='main-container'>
                    <h1>Can't Load!</h1>
                    <p>It seems we can't load data at this time or this address is incorrect! Refresh the page or <span className='trylater text-danger'>try again later</span></p>
                    <Link className='mt-2' to='/'>Go Home</Link>
                </div>
            </div>
        </Container>
    );
}

export default LoadingError;
