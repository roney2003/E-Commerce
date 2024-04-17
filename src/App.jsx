
import { useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// importing from the components

import Home from "./Page/Home";
import Navbar from "./Components/Navbar";
import Cart from "./Page/Cart";

// importing the context

import ProductContext from "./context/ProductContext";




function App() {

   const [products,setProducts] = useState([]);
   const [cart,setCart] = useState([]);
  
    const addToCart = (product) => {
      setCart([...cart,product]);
      //console.log(cart);
      alert('Product added to cart');
    };

    const removeFromCart = (product) => {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
    }

  return (
    <div className>  
     
     
   
      {/*<Home products={products} setProducts={setProducts}/>
      <Cart />*/}
     <ProductContext.Provider value={{products,setProducts,cart ,addToCart,removeFromCart}}> 
    <BrowserRouter>
    <Navbar  />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
    </ProductContext.Provider>
    
    </div>
  );
}

export default App;
 

 // Path: src/index.jsx