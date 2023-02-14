import React, {useEffect, useState} from 'react';
import {AppProvider} from './AppProvider'
import ShopIndex from './Shop/ShopIndex'
import CheckoutIndex from './components/Checkout/CheckoutIndex'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"

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
      {/* <AppProvider> */}
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='id' element={<IdPage />}  />
        </Routes>
        {/* <ShopIndex />
        <CheckoutIndex /> */}
      {/* </AppProvider> */}
    </BrowserRouter>
  );
}

export default App;
