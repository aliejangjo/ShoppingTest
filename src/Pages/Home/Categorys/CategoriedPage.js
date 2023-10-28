import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import Loader from '../../../Containers/Loader/Loader';
import Card from '../../../Components/Card/Card';
import axios from 'axios';
import './CategoriedPage.css'
import Container from '../../../Components/Container/Container';
import Pagination from '../../../Components/Pagination/Pagination'
import FilterProducts from '../../../Containers/FilterProducts/FilterProducts';
import LoadingError from '../../../Containers/Error/Loading/LoadingError'

const CategoriedPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const [error, setError] = useState(false)
    const [sorted, setSorted] = useState(false)
    const locationState = useLocation()
    const location = useParams()
    const recordsPerPage = 6
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = useMemo(() => data.slice(firstIndex, lastIndex))

    useEffect(() => {
        setLoader(true)
        setSorted(false)
        setError(true)
        const getData = async () => {
            await axios.get('https://dummyjson.com/products').then(res => {
                let filteredData = res.data.products.filter(item => item.category === location.category)

                if (locationState.state.price === 'Increase') {
                    filteredData.sort((a, b) => a.price - b.price);
                    setSorted(true)
                } else if (locationState.state.price === 'Decrease') {
                    filteredData.sort((a, b) => b.price - a.price);
                    setSorted(true)
                } else if (locationState.state.price === '') {
                    filteredData = res.data.products.filter(item => item.category === location.category);
                }
                setData(filteredData)
                setLoader(false)
                setError(false)
            }).catch((err) => {
                setError(true)
                setLoader(false)
            })
        }
        getData()
        console.log(locationState.state.price);
    }, [location])
    return (
        loader ? <Loader /> : (
            error ? <LoadingError /> : (
                <Container>
                    <div className='Category'>
                        <h3 className='Category-title'>Category of : {location.category} {sorted ? '| Sorted by: ' + locationState.state.price : ''}</h3>
                        <div className='Category-main'>
                            <div className='Category-products'>
                                <div>
                                    {data ? (
                                        records.map((item, index) => {
                                            return <Card path={`/Product/${item.id}/${item.title}`} key={index} image={item.thumbnail} price={item.price} discountPercent={item.discountPercentage} rate={item.rating} stock={item.stock} title={item.title} />
                                        })
                                    ) : <Loader />}
                                </div>
                                <div>
                                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} recordsPerPage={recordsPerPage} data={data} />
                                </div>
                            </div>
                            <div className='Category-filter'>
                                <FilterProducts />
                            </div>
                        </div>

                    </div>
                </Container>
            )
        )
    );
}

export default CategoriedPage;
