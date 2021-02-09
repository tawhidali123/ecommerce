import React, {useEffect, useState} from 'react';

import Nav from './components/Nav';
import Home from './components/Home'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
    .then(res => res.json())
    .then(resp => setProducts(resp))
  }, [])

  return (
    <div>
        <Nav />
        <Home products={products} />
    </div>
  );
}

export default App;
