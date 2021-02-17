import React, {useEffect, useState} from 'react';
import {AppProvider} from './AppProvider'
import ShopIndex from './Shop/ShopIndex'
import CheckoutIndex from './Checkout/CheckoutIndex'

function App() {
  return (
    <AppProvider>
      <ShopIndex />
      <CheckoutIndex />
    </AppProvider>
  );
}

export default App;
