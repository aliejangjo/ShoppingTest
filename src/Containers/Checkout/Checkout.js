import React, { useEffect, useState } from 'react';
import CheckoutCard from '../../Components/Checkout/Card/CheckoutCard';
import { useDispatch, useSelector } from 'react-redux';
import './Checkout.css'
import Button from '../../Components/Button/Button/Button';
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {

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
    console.log(data);
    useEffect(() => {
        setData(cart)
    }, [cart])

    return (
        <div className='Checkout-Main'>
            <div className='Checkout-Header'>
                <h3>Checkout</h3>
                <Button class='secondary-btn pointer'>Next</Button>
            </div>
            <div className='Checkout-body'>
                {data?.length > 0 ? (
                    data?.map((item, index) => {
                        return <CheckoutCard decrease={() => DecreaseHandler(item)} increase={() => IncreaseHandler(item)} delete={() => DeleteHandler(item.id)} key={index} title={item.title} image={item.images[0]} count={item.count} />
                    })
                ) : <h3 className='text-center'>There is nothing to show here</h3>}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Checkout;
