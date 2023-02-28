/* eslint-disable no-unused-vars */
import React from 'react';
import {AppProvider} from './AppProvider';
import ShopIndex from './Shop/ShopIndex';
import CheckoutIndex from './components/Checkout/CheckoutIndex';
import ItemPage from './components/ItemPage/ItemPage';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './App.css';

const MainPage = () => (
  <AppProvider>
    <ShopIndex />
    <CheckoutIndex />
  </AppProvider>
)

const IdPage = () => (
  <div>
    Id Item Page
  </div>
)

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/item' element={<AppProvider><ItemPage /></AppProvider>}  />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
