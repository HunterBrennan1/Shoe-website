import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, BrowserRouter } from 'react-router-dom';
import { CartContext } from './cartcontext';
import { Link } from 'react-router-dom';
import Checkout from '../components/checkout';
import Main from './main.js';
import Nav from './nav.js';
import Hero from './hero.js';
import CheckoutPage from './checkoutpage.js';
import { items } from './shoeslist.js';;





export const Shop = () => {



  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  let filters = ["Nike", "Adidas", "New Balance", "Puma", "Black", "White", "Blue", "Orange",];




  const [totalPrice, setTotalPrice] = useState(0);

  //button filtering function
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters((prevSelectedFilters) =>
        prevSelectedFilters.filter((el) => el !== selectedCategory)
      );
    } else {
      setSelectedFilters((prevSelectedFilters) => [...prevSelectedFilters, selectedCategory]);
    }
  };


  // Finding total price for items
  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);


  //filtering items based on category name ex:nike,adidas,puma,etc
  useEffect(() => {
    filterItems();
  }, [selectedFilters, items]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.flatMap((selectedCategory) => {
        return items.filter((item) => item.category === selectedCategory);
      });
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...items]);
    }
  };


  //adds and removes items to cart
  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  //modal popout function to see if its open or not
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  console.log('cartItems:', cartItems);
  console.log('totalPrice:', totalPrice);

  return (

    <section>

      <Nav />
      <Hero />
      <Main />
      <div>
      </div>
      <div className='search_filter_wrapper'>
        <div className='search_filter_container flex flex-col w-full'>

          <div className='buttons_container_search flex z-10 sticky top-0 flex-row justify-evenly gap-5 p-5  w-full  shadow-lg bg-white '>

            {filters.map((category, idx) => (
              <button onClick={() => handleFilterButtonClick(category)} className={`filter_button ${selectedFilters?.includes(category) ? "active" : ""}   text-teal-main rounded-md  w-full justify-evenly text-sm font-bold cursor-pointer gap-5 mt-1 px-2 py-5  `} key={`filters-${idx}`}>
                {category}
              </button>
            ))}
          </div>
          <div className='item_container flex flex-wrap  gap-0 justify-center px-0 w-full mt-10 '>
            {filteredItems.map((item, idx) => (
              <div key={`items-${idx}`} className="item  relative flex flex-col p-5 w-80 min-w-1/5 hover:shadow-lg">

                <img className='item_img' src={item.image} alt=""></img>
                <a className='text-center pt-1 absolute h-10 w-10 right-12 top-8 text-2xl text-teal-main bg-hero-color rounded-full hover:shadow-lg hover:border-2 hover:border-teal-main hover:pt-0 cursor-pointer' onClick={() => handleAddToCart(item)}>+</a>
                <a className='card_name text-2xl lg:text-lg md:text-sm sm:text-xs text-left cursor-pointer py-2 underline underline-offset-4 decoration-teal-main'>{item.name}</a>
                <p className='text-sm'>{item.price}</p>
                <div className='category_container'>
                  <p className='category text-right font-bold w-full text-sm border-b-2 border-teal-main'>{item.category}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <button className="show-modal-button flex fixed bottom-10 left-10 z-40 bg-teal-main shadow-xl border-4 border-yellow-main rounded-full p-5 w-20 h-20" onClick={handleButtonClick}>
          <svg className='absolute w-10 left-4 bottom-4' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>

        </button>

        {isModalOpen && (
          <section>
            <Checkout cartItems={cartItems} totalPrice={totalPrice} handleRemoveFromCart={handleRemoveFromCart} />

            <div className="modal-overlay h-full fixed top-0 right-0  z-10">
              <div className="modal-content w-96 flex flex-col overflow-hidden flex-wrap shadow-2xl absolute top-0 right-0 h-max  bg-white z-10 p-5">
                <div className="modal-inner overflow-y-auto">
                  <div className=''>
                    <h2 className='text-2xl font-bold text-center pt-9 mb-10 text-teal-main'>Shopping Cart</h2>
                    <button className='absolute top-5 right-10' onClick={handleModalClose}>Close</button>

                  </div>
                  <div className="cart_summary flex flex-col gap-2">
                    <div className='flex w-full justify-center'>
                      <ul className='w-40 justify-center flex flex-col gap-5'>
                        {cartItems.map((item, idx) => (
                          <li className='flex flex-col gap-3 text-sm h-72 w-40' key={`cart-item-${idx}`}><img className="cart_item_img w-40" src={item.image} alt="" />
                            {item.name}<br></br>{item.price}
                            <button className='text-lg text-center bg-yellow-main text-teal-main w-40 rounded-md' onClick={() => handleRemoveFromCart(item.id)}>Remove from cart</button>
                          </li>

                        ))}
                        <li className='w-full'>

                          <Link to="/checkout" className=' checkout_btn bg-teal-main relative text-yellow-main w-60 text-center py-5 rounded-md'>Checkout!</Link>
                          <div className='total_price_container'>
                            <p className='text-center mt-2'>Total Price:&#x24;{totalPrice.toFixed(2)}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </section>
        )}
      </div>
    </section >

  );
};


export default Shop;