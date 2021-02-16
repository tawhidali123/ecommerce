import React, {useEffect, useState} from 'react';
import {AppProvider} from './AppProvider'
import ShopIndex from './Shop/ShopIndex'

function App() {

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   fetch(`http://localhost:3000/products`)
  //   .then(res => res.json())
  //   .then(resp => setProducts(resp))
  // }, [])

  return (
    <AppProvider>
      <ShopIndex />
    </AppProvider>
  );
}

export default App;
