import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './cartcontext';
import Nav from './nav';


const Checkout = () => {

  const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  }

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
        <p className='text-center font-2xl text-bold'>No items in the cart.</p>
        <Link className='text-center font-2xl bg-teal-main w-96 text-yellow-main p-5 rounded-md' to="/">Back to Shop</Link>
        <p className='text center font-xl text-teal-main'>Check out some of our top picks for the week!</p>
      </section>
    );
  }

  return (
    <section>
      <Nav />
      <div>
        <div className='px-8 lg:px-8 md:px-8 sm:px-24 xs:px-24'>

          <div className='flex flex-col justify-center'>
            <h2 className="text-2xl font-bold text-center pt-9 mb-10 text-teal-main">Checkout</h2>
            <Link className='text-center mb-10  rounded-md p-5 ' to="/">Back to Shop</Link>
          </div>
          <div className='flex flex-col justify-between lg:flex-row md:flex-row sm:flex-col xs:flex-col'>
            <ul className="checkout-list py-10 justify-center align-center flex flex-wrap flex-col w-full">
              {cartItems?.map((item, idx) => (
                <div className='mb-5'>
                  <li className='flex flex-row align-center justify-center gap-3 text-sm h-40 w-full' key={`cart-item-${idx}`}><img className="cart_item_img h-40 w-40" src={item.image} alt="" />
                    <div className='flex flex-col w-64 text-lg  justify-between'>{item.name}<br></br>{item.price}<br></br>Quantity: {item.quantity}<button className='text-md text-center bg-yellow-main text-teal-main h-10 w-full rounded-md' onClick={() => handleRemoveFromCart(item.id)}>Remove from cart</button></div>

                  </li>
                </div>
              ))}
            </ul>
            <div className='w-full flex flex-col text-center'>

              <div className="flex justify-center items-center">
                <div className="py-0 px-0 md:pl-4 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container w-full">
                  <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex justify-start flex-col items-start space-y-2">
                      <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                      </button>


                    </div>

                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                      <div className="p-8 bg-gray-100 flex flex-col lg:w-full">
                        <button className="border border-transparent hover:border-gray-300 bg-teal-main hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                          <div>

                          </div>
                          <div>
                            <p className="text-base leading-4">Pay</p>
                          </div>
                        </button>

                        <div className="flex flex-row justify-center items-center mt-6">
                          <hr className="border w-full" />
                          <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">or pay with card</p>
                          <hr className="border w-full" />
                        </div>

                        <div className="mt-8">
                          <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email" />
                        </div>

                        <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
                        <div className="mt-2 flex-col">
                          <div>
                            <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="0000 1234 6549 15151" />
                          </div>
                          <div className="flex-row flex">
                            <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="MM/YY" />
                            <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="CVC" />
                          </div>
                        </div>

                        <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
                        <div className="mt-2 flex-col">
                          <div>
                            <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Name on card" />
                          </div>
                        </div>

                        <label className="mt-8 text-base leading-4 text-gray-800">Country or region</label>
                        <div className="mt-2 flex-col">
                          <div className="relative">
                            <button className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" type="email">
                              {country}
                            </button>
                            <svg onClick={() => setMenu(!menu)} className={"transform  cursor-pointer absolute top-4 right-4 " + (menu ? "rotate-180" : "")} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className={"mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " + (menu ? "block" : "hidden")}>
                              {countries.map((country) => (
                                <div key={country} className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2" onClick={changeText}>
                                  {country}
                                </div>
                              ))}
                            </div>
                          </div>
                          <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="ZIP" />
                        </div>

                        <button className="mt-8 border border-transparent hover:border-gray-300 bg-teal-main hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                          <div>
                            <p className="text-base leading-4">Confirm Payment</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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






