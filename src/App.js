import React from 'react';
import './bootstrap/css/bootstrap.css';
import './style.css';
// import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';


import { useState } from 'react';



function App() 
{

  const PAGE_PRODUCTS = "produts";
  const PAGE_CART = "cart";
  const [cart , setCart]= useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  


 const addToCart = (product)=>
 {
    console.log( product.title +" is added to cart.");
    setCart([...cart,{...product}]);
 };

 const navigateTo = (nextpage)=>
 {
      setPage(nextpage);
 }

 const removeCart = (productToRemove)=>
 {
  console.log( productToRemove.title +" is removed from cart.");
    setCart(cart.filter((product)=> product!== productToRemove));
 }

  return (
     <div className="App container-fluid">

    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top" >
        <a className="navbar-brand" href="/"><img src="data:image/png;base64,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" className="image-responsive" height="50" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
        </button>

    <div class="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/"><h4 className="banner">Flip_Zon</h4></a>
        </li>
        
        <li className="nav-item home">
        <a className="nav-link" href="/">Home</a>
        </li>

        <li className="nav-item home1">
        <a className="nav-link" href="/">Shop</a>
        </li>

        <li className="nav-item home2">
        <a className="nav-link btn btn-info btn-md"  onClick={()=>navigateTo(PAGE_CART)}>
          <span className="glyphicon glyphicon-shopping-cart"></span>
          Cart{" ("+cart.length+")"}
        </a>
        </li>
        </ul>
       </div>
    </nav>

 


      {page===PAGE_PRODUCTS && <Products addToCart={addToCart}/>}
      {page===PAGE_CART && <Cart cart = {cart} removeCart = {removeCart}/>}

      </div>
  );

}

export default App;
