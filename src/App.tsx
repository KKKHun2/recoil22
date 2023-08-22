import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Layout } from './components/Layout/Layout';
import Navbar from './components/Navi/Navbar';
import Cart from './pages/Cart';
import Main from './pages/Main';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
