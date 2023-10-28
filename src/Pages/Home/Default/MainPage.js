import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Loader from '../../../Containers/Loader/Loader'
import './MainPage.css'
import Card from '../../../Components/Card/Card';
import Container from '../../../Components/Container/Container';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-bootstrap-icons';
import LoadingError from '../../../Containers/Error/Loading/LoadingError';

const MainPage = () => {
    const [topSell, setTopSell] = useState([])
    const [error, setError] = useState()
    const [discount, setDiscount] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setError(true)
        const getData = async () => {
            await axios.get('https://dummyjson.com/products').then(res => {
                setLoader(false)
                setTopSell(res.data.products.sort((a, b) => {
                    return a.stock - b.stock
                }).slice(0, 5))
                setDiscount(res.data.products.sort((a, b) => {
                    return b.discountPercentage - a.discountPercentage
                }).slice(0, 5))
                setError(false)
            }).catch((err) => {
                setLoader(false)
                setError(true)
            })
        }
        getData()
    }, [])

    return (
        loader ? <Loader /> : (
            error ? <LoadingError /> : (
                <Container>
                    <section className='top-selling'>
                        <h3 className='top-selling-title'>Top Selling</h3>
                        <div className='top-selling-main'>
                            {topSell ? (
                                topSell.map((item, index) => {
                                    return <Card path={`Product/${item.id}/${item.title}`} key={index} image={item.thumbnail} price={item.price} discountPercent={item.discountPercentage} rate={item.rating} stock={item.stock} title={item.title} />
                                })
                            ) : <Loader />}
                            <Link to='/TopSelling' className='see-more'><ChevronRight size={25} />See More</Link>
                        </div>
                    </section>
                    <section className='top-dicsount'>
                        <h3 className='top-dicsount-title'>Top Discount</h3>
                        <div className='top-dicsount-main'>
                            {discount ? (
                                discount.map((item, index) => {
                                    return <Card path={`Product/${item.id}/${item.title}`} discount key={index} image={item.thumbnail} price={item.price} discountPercent={item.discountPercentage} rate={item.rating} stock={item.stock} title={item.title} />
                                })
                            ) : <Loader />}
                            <Link to='/Discount' className='see-more'><ChevronRight size={25} />See More</Link>
                        </div>
                    </section>
                </Container>
            )
        )
    );
}

export default MainPage;
