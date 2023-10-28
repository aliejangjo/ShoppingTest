import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';
import LoadingError from '../Error/Loading/LoadingError';
import Container from '../../Components/Container/Container';
import './SingleProduct.css'
import Carousel from '../../Components/Carousel/Carousel';
import Button from '../../Components/Button/Button/Button';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const SingleProduct = () => {
    const [loader, setLoader] = useState()
    const [error, setError] = useState()
    const [product, setProduct] = useState({})
    const param = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        const getData = async () => {
            setLoader(true)
            setError(true)
            await axios.get(`https://dummyjson.com/products/${param.id}`).then((res) => {
                setProduct(res.data)
                setLoader(false)
                setError(false)
            }).catch((err) => {
                setLoader(false)
                setError(true)
            })
        }
        getData()
    }, [param])

    return (
        loader ? <Loader /> : (
            error ? <LoadingError /> : (
                <Container>
                    <div className='Product'>
                        <div>
                            <Carousel data={product.images} />
                        </div>
                        <div className='Product-main'>
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <h3>{product.title}</h3>
                                    <span><span className={`${product.rating >= 4 ? 'text-succeed' : product.rating >= 3 ? 'text-warning' : 'text-danger'}`}>{product.rating}</span> Star</span>
                                </div>
                                <div className='Product-text'>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center buy-section'>
                                <Button click={() => {
                                    dispatch({ type: 'ADDTOCART', payload: { ...product, count: 1 } })
                                    dispatch({type : 'SETLOCAL'});
                                    toast.success('Added Successfuly!', {
                                        position: "top-center",
                                        autoClose: 1500,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: false,
                                        draggable: false,
                                        progress: undefined,
                                        theme: "light",
                                        });
                                }} class='a pointer w-75 primary-btn'>Add to Card</Button>
                                <span>{product.stock} in Stock</span>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </Container>
            )
        )
    );
}

export default SingleProduct;
