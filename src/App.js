import React, {useEffect, useState} from 'react';
import {AppProvider} from './AppProvider'
import ShopIndex from './Shop/ShopIndex'

function App() {
  return (
    <AppProvider>
      <ShopIndex />
    </AppProvider>
  );
}

export default App;
