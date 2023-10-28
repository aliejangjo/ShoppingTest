import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className='text-center mt-2'>
            <p>Account Page is Here</p>
            <Link to='/'>Go Home</Link>
        </div>
    );
}

export default Account;
