import React, { useState } from 'react';
import './Carousel.css'
import { useEffect } from 'react';

const Carousel = (props) => {
    const [currentImage, setCurrentImage] = useState(0)
    const AllImages = props.data?.length
    useEffect(() => {
        let timeoutId;
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            setCurrentImage(currentImage < AllImages - 1 ? currentImage + 1 : 0);
        }, 5000);
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        }
    }, [currentImage])

    return (
        <div className='Carousel-main'>
            <div className='Carousel-images'>
                {props.data?.map((item, index) => {
                    return <img key={item} className={`Carousel-image ${index === currentImage ? 'd-block' : 'd-none'}`} height={350} width={350} src={item} />
                })}
                <div className='small-images d-flex flex-wrap justify-content-start'>
                    {props.data?.map((item, index) => {
                        return (
                            <img key={item} onClick={() => { setCurrentImage(index) }} className={`mx-1 my-1 pointer rounded ${currentImage === index ? 'border border-primary' : ''}`} width={100} height={100} src={item} />
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default Carousel;
