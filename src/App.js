import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainRouter } from './Router/Router';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const getTheme = JSON.parse(localStorage.getItem('theme'))
  if(getTheme){
    document.querySelector('body').setAttribute('data-theme' , getTheme)
  }
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
