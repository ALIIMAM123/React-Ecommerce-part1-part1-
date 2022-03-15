
import React from 'react' ;
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Footer from './components/Footer';



const  App = () => {
  return <>
  <Register/>
  <Login/>
  <Home/>
  <Product/>
  <ProductList/>
  <Cart/>
  

  </> 
  
};

export default App;
