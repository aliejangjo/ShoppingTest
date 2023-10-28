import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ChevronDown, ChevronUp, Trash } from 'react-bootstrap-icons';
import './CheckoutCard.css'
import Button from '../../Button/Button/Button';

const CheckoutCard = (props) => {
    return (
        <div className='Checkout-Card'>
            <div className='Left-Side'>
                <div>
                    <LazyLoadImage width={100} height={100} src={props.image} alt={props.title} />
                </div>
                <div className='Checkout-Card-Title'>
                    <h4>{props.title}</h4>
                </div>
            </div>
            <div className='Right-Side'>
                <div className='Count-Part'>
                    <Button click={props.increase} class='pointer'>
                        <ChevronUp className='icon' />
                    </Button>
                    <p>{props.count}</p>
                    <Button click={props.decrease} class='pointer'>
                        <ChevronDown className='icon' />
                    </Button>
                </div>
                <div className='Delete'>
                    <Button click={props.delete} class='pointer'>
                        <Trash className='text-danger' />
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default CheckoutCard
