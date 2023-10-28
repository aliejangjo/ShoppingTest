import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Pages/Home/Home';
import Header from '../Containers/Header/Header';
import Account from '../Pages/Account/Account';
import NotFoundPage from '../Containers/Error/NotFound/NotFoundPage'
import CheckoutPage from '../Pages/Account/Checkout/CheckoutPage'
import MainPage from '../Pages/Home/Default/MainPage'
import CategoryPage from '../Pages/Home/Categorys/CategoriedPage'
import DiscountPage from '../Pages/Home/Discount/DiscountPage'
import TopSellingPage from '../Pages/Home/TopSelling/TopSellingPage'
import Footer from '..//Containers/Footer/Footer'
import BeforeHeader from '../Containers/BeforeHeader/BeforeHeader';
import ProductPage from '../Pages/Home/Product/ProductPage'
import ContactUs from '../Pages/Home/ContactUs/ContactUs';

export const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path='*' Component={Home} />
                <Route path='/Account' Component={Account} />
            </Routes>
        </>
    );
}

export const HomeRouter = () => {
    return (
        <>
        <BeforeHeader />
            <Header />
            <Routes>
                <Route path='/*'>
                    <Route path='*' Component={NotFoundPage} />
                    <Route index Component={MainPage} />
                    <Route path='Category/:category' Component={CategoryPage} />
                    <Route path='Discount' Component={DiscountPage} />
                    <Route path='TopSelling' Component={TopSellingPage} />
                    <Route path='Checkout' Component={CheckoutPage} />
                    <Route path='Product/:id/:name' Component={ProductPage} />
                    <Route path='Contact' Component={ContactUs} />
                </Route>
            </Routes>
            <Footer />
        </>
    );
}

export const UserRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/Account/*'>
                    <Route index Component={Account} />
                </Route>
            </Routes>
        </>
    )
}
