import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingError from '../../../Containers/Error/Loading/LoadingError';
import Container from '../../../Components/Container/Container';
import Loader from '../../../Containers/Loader/Loader';
import Card from '../../../Components/Card/Card';
import PaginationHandler from '../../../Components/Pagination/Pagination';
import './DiscountPage.css'

const DiscountPage = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [loader, setLoader] = useState(true)
    const recordsPerPage = 10
    const lastIndex = recordsPerPage * currentPage
    const firstIndex = lastIndex - recordsPerPage
    const records = data.slice(firstIndex, lastIndex)

    useEffect(() => {
        setError(true)
        const getData = async () => {
            await axios.get('https://dummyjson.com/products').then(res => {
                setLoader(false)
                setData(res.data.products.sort((a, b) => {
                    return b.discountPercentage - a.discountPercentage
                }))
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
                    <div className='Discount'>
                        <h3 className='Discount-title'>Top Discount</h3>
                        <div className='Discount-main'>
                            {data ? (
                                <div className='Discount-Cards'>
                                    {records.map((item, index) => {
                                        return <Card path={`/Product/${item.id}/${item.title}`} discount key={index} image={item.thumbnail} price={item.price} discountPercent={item.discountPercentage} rate={item.rating} stock={item.stock} title={item.title} />
                                    })}
                                </div>
                            ) : <Loader />}
                            <PaginationHandler currentPage={currentPage} setCurrentPage={setCurrentPage} recordsPerPage={recordsPerPage} data={data} />

                        </div>
                    </div>
                </Container>
            )
        )
    );
}

export default DiscountPage;
