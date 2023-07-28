import React from 'react';
import Checkout from '../components/checkout';

const CheckoutPage = ({ cartItems, totalPrice, handleRemoveFromCart }) => {
  // You may need to pass relevant props to the Checkout component here
  return (
    <div>
      {/* Add any necessary page layout or styling here */}
      <Checkout cartItems={cartItems} totalPrice={totalPrice} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default CheckoutPage;