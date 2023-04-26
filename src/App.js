import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import Home from './components/Home.js';
import Productdetail from './components/Productdetail.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx';
import Product from './components/Product.jsx';
import Productlist from './components/Productlist.jsx';
import Cart from './components/Cart/Cart.jsx';
import Signup from './components/Signup.jsx';
import Address from './components/Cart/Address';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="product1" element={<Productdetail />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/product' element={<Product />} />
          <Route exact path='/productlist' element={<Productlist />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/address' element={<Address />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  );
}

export default App;
