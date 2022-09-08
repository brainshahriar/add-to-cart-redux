import React, { useEffect } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import './app.scss'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';
const App:React.FC = ()=> {
  return (
    <>
    <div className='app'>
      <Navbar/>
        <Routes>
            <Route  path="/" element={<Products/>}/>
            <Route  path="/cart" element={<Cart/>}/>
            <Route  path="/product/:id" element={<SingleItem/>}/>
          </Routes>
    </div>
    </>
  );
}

export default App;
