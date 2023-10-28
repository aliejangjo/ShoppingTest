import React from 'react';
import './Backdrop.css'

const Backdrop = (props) => {
    return (
        <div className='backdrop' onClick={props.click}>
            {props.children}
        </div>
    );
}

export default Backdrop;
