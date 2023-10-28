import React from 'react';
import './RadioButton.css'

const RadioButton = (props) => {
    return (
        <label className="label">
            <input onChange={props.change} value={props.value} name={props.name} id={props.id} className="radio-input" type="radio" />
            <div className="radio-design"></div>
            <div className="label-text">{props.text}</div>
        </label>
    );
}

export default RadioButton;
