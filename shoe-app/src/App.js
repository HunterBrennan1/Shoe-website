
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './components/shop';
import Checkout from './components/checkout';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  return (
    <Router>
      <Routes>
        {/* Define the Shop route */}
        <Route path="/" element={<Shop
          cartItems={cartItems}
          setCartItems={setCartItems}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          handleRemoveFromCart={handleRemoveFromCart}
        />} />

        {/* Define the Checkout route */}
        <Route path="/checkout" element={<Checkout
          cartItems={cartItems}
          totalPrice={totalPrice}
          handleRemoveFromCart={handleRemoveFromCart}
        />} />
      </Routes>
    </Router>
  );
};

export default App;