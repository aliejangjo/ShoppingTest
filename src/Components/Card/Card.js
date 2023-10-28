import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = (props) => {

    const discountPercent = props.discountPercent
    const discountDecimal = discountPercent / 100;
    const discountAmount = props.price * discountDecimal;
    const finalPrice = (props.price - discountAmount).toFixed(2)
    return (
        <div className='Card'>
            <Link to={props.path} className='Card-Link'>
                <div className='Card-img'>
                    {props.discount ? <div className='badge'>{discountPercent}%</div> : ''}
                    <LazyLoadImage alt='...' effect='blur' placeholderSrc={props.image} width={250} height={250} src={props.image} />
                </div>
                <div className='Card-main'>
                    <div className='Card-top-main'>
                        <h3 className='Card-title'>{props.title}</h3>
                        {props.discount ? (
                            <div>
                                <h3 className='Card-price text-succeed'>{finalPrice}$</h3>
                                <h3 className='Card-price text-muted text-discount'>{props.price}$</h3>
                            </div>
                        ) : <h3 className='Card-price'>{props.price}$</h3>}
                    </div>
                    <div className='Card-bottom-main'>
                        <span className={`text-muted ${Math.floor(props.rate) >= 4 ? 'text-succeed' : Math.floor(props.rate) >= 2 ? 'text-warning' : 'text-danger'}`}>{Math.floor(props.rate)} Star</span>
                        <span className={`text-muted ${props.stock > 0 ? 'text-succeed' : 'text-warning'}`}>{props.stock > 0 ? `${props.stock} in Stock` : 'Out of Stock'}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
