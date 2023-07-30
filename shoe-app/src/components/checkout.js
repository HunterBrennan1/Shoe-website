import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './cartcontext';
import Nav from './nav';

const Checkout = () => {

  const { totalPrice, setTotalPrice, } = useCartContext();
  // const { cartItems } = useCartContext();

  const { cartItems, setCartItems } = useCartContext();

  const handleAddToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };




  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : null
          : item
      ).filter(Boolean)
    );
  };

  console.log('Received cartItems:', cartItems);
  console.log('Received totalPrice:', totalPrice);

  if (!cartItems || cartItems.length === 0) {
    return (
      <section>
        <Nav />
        <p>No items in the cart.</p>
        <Link to="/">Back to Shop</Link>
      </section>
    );
  }

  return (
    <section>
      <Nav />
      <div>
        <div className='px-72'>

          <div className='flex flex-col justify-center'>
            <h2 className="text-2xl font-bold text-center pt-9 mb-10 text-teal-main">Checkout</h2>
            <Link className='text-center mb-10  rounded-md p-5 ' to="/">Back to Shop</Link>
          </div>
          <div className='flex flex-row justify-between'>
            <ul className="checkout-list  flex flex-col w-1/2">
              {cartItems?.map((item, idx) => (
                <div className='mb-5'>
                  <li className='flex flex-row gap-3 text-sm h-40 w-full' key={`cart-item-${idx}`}><img className="cart_item_img h-40 w-40" src={item.image} alt="" />
                    <div className='flex flex-col text-lg w-full justify-between'>{item.name}<br></br>{item.price}<br></br>Quantity: {item.quantity}<button className='text-md text-center bg-yellow-main text-teal-main h-10 w-1/2 rounded-md' onClick={() => handleRemoveFromCart(item.id)}>Remove from cart</button></div>

                  </li>
                </div>
              ))}
            </ul>
            <div className='w-1/2 flex flex-col text-center'>
              <h1>Payment Details</h1>
            </div>
          </div>
          <div className="total_price_container">
            <p className="text-center mt-2">Total Price:&#x24;{totalPrice?.toFixed(2)}</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;






