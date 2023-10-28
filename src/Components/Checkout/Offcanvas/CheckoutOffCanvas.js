import React, { useEffect, useState } from 'react';
import Offcanvas from '../../Offcanvas/Offcanvas';
import Button from '../../Button/Button/Button'
import { Cart } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutCard from '../Card/CheckoutCard';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CheckoutOffCanvas = () => {
    const [data, setData] = useState()
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const DeleteHandler = (id) => {
        const findIndex = data.findIndex(item => {
            return item.id === id
        })
        console.log(findIndex);
        data.splice(findIndex, 1)
        setData([...data])
        dispatch({ type: 'UPDATECART', payload: data })
        dispatch({type : 'SETLOCAL'});
        toast.warn('Deleted Successfuly!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    }

    const IncreaseHandler = (product) => {
        const find = data.find(item => {
            return item.id === product.id
        })
        find.count += 1
        setData([...data])
        dispatch({ type: 'UPDATECART', payload: data })
        dispatch({type : 'SETLOCAL'});
    }

    const DecreaseHandler = (product) => {
        const find = data.find(item => {
            return item.id === product.id
        })
        find.count -= 1
        if (product.count <= 0) {
            DeleteHandler(product.id)
        }
        setData([...data])
        dispatch({ type: 'UPDATECART', payload: data })
        dispatch({type : 'SETLOCAL'});
    }

    useEffect(() => {
        setData(cart)
    }, [cart])
    return (
        <>
            <Offcanvas button={<Button class='a pointer'><Cart size={25} /></Button>}>
                <Offcanvas.title><h2>Checkout</h2></Offcanvas.title>
                <Offcanvas.body>
                    {data?.length > 0 ? (
                        data?.map((item, index) => {
                            return <CheckoutCard decrease={() => DecreaseHandler(item)} increase={() => IncreaseHandler(item)} delete={() => DeleteHandler(item.id)} key={index} title={item.title} image={item.images[0]} count={item.count} />
                        })
                    ) : <h3 className='text-center'>There is nothing to show here</h3>}
                </Offcanvas.body>
                <Offcanvas.footer>
                    <Link to='/Checkout' className='primary-btn pointer w-100 rounded-0 d-block text-center'>Continue</Link>
                </Offcanvas.footer>
            </Offcanvas>
            <ToastContainer />
        </>
    );
}

export default CheckoutOffCanvas;
