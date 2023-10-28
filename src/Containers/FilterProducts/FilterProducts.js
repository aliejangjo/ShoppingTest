import React, { useEffect, useState } from 'react';
import RadioButton from '../../Components/Button/Radio/RadioButton';
import Button from '../../Components/Button/Button/Button'
import './FilterProducts.css'
import { Link, useLocation, useParams } from 'react-router-dom';

const FilterProducts = () => {
    const [price, setPrice] = useState('');
    const location =  useLocation()
    const param = useParams()
    const deSelect = (name) => {
        const ele = document.getElementsByName(name);
        for (let i = 0; i < ele.length; i++)
            ele[i].checked = false;
    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    useEffect(() => {
        deSelect('Price')
    } , [param.category])

    return (
        <>
            <div className='radio-parent'>
                <h3>Price</h3>
                <div className="radio-input-wrapper">
                    <RadioButton change={handlePriceChange} text='Increase' id='Price-Increase' value='Increase' name='Price' />
                    <RadioButton change={handlePriceChange} text='Decrease' id='Price-Decrease' value='Decrease' name='Price' />
                    <Button class='pointer a' click={() => deSelect('Price')}>Clear</Button>
                </div>
            </div>
            <Link state={{...location.state , price:price}} className='w-100 mt-2 text-center'>Submit</Link>
        </>
    );
}

export default FilterProducts;
