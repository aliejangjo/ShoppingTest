import React, { useState } from 'react';
import './Dropdown.css'
import { Link } from 'react-router-dom';
import { ChevronDown } from 'react-bootstrap-icons';

const Dropdown = (props) => {
    const [collapse, setCollapse] = useState(false)
    return (
        <div className='dropdown'>
            <button onClick={() => setCollapse(!collapse)} className='Category-btn'>{props.children}<ChevronDown /></button>
            <div className={`Category-dropdown ${props.type ? props.type : ''} ${collapse ? 'active' : ''}`}>
                <ul>
                    {props.dropItems.map((item, index) => {
                        return <li key={index}><Link to={item.path} onClick={()=> {setCollapse(false);  if(props.collapse){props.setCollapse(false)}}} state={{ category: item.title }}>{item.title}</Link></li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;
