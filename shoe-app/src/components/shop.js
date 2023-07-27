import React, { useEffect, useState } from 'react';
import { items } from './shoeslist.js';;


export const Shop = () => {

  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  let filters = ["Nike", "Adidas", "New Balance", "Puma"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory)

        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (

    <section>
      <div>
      </div>
      <div className='search_filter_wrapper'>
        <div className='search_filter_container flex flex-col w-full'>

          <div className='buttons_container_search flex z-10 sticky top-0 flex-row justify-evenly gap-5 p-5  w-full  shadow-lg bg-white '>

            {filters.map((category, idx) => (
              <button onClick={() => handleFilterButtonClick(category)} className={`filter_button ${selectedFilters?.includes(category) ? "active" : ""}  bg-yellow-main text-teal-main rounded-md  w-full justify-evenly text-sm font-bold cursor-pointer gap-5 mt-1 px-2 py-5 active:bg-teal-main `} key={`filters-${idx}`}>
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
          <div className="modal-overlay h-full fixed top-0 right-0  z-10">
            <div className="modal-content w-96 flex flex-col overflow-hidden flex-wrap shadow-2xl absolute top-0 right-0 h-max  bg-white z-10 p-5">
              <div className="modal-inner overflow-y-auto">
                <div className=''>
                  <h2 className='text-2xl font-bold text-center pt-9 mb-10 text-teal-main'>Shopping Cart</h2>
                  <button className='absolute top-5 right-10' onClick={handleModalClose}>Close</button>
                </div>
                <div className="cart_summary flex flex-col gap-2">
                  <div className='flex justify-center'>
                    <ul className='w-40 flex flex-col gap-5'>
                      {cartItems.map((item, idx) => (
                        <li className='flex flex-col gap-3 text-sm h-72 w-40' key={`cart-item-${idx}`}><img className="cart_item_img w-40" src={item.image} alt="" />
                          {item.name}<br></br>{item.price}
                          <button className='text-lg text-center bg-yellow-main text-teal-main w-40 rounded-md' onClick={() => handleRemoveFromCart(item.id)}>Remove from cart</button>
                        </li>

                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>

    </section>
  )
}
// };

export default Shop;