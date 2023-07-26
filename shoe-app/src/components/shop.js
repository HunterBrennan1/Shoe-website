import React, { useEffect, useState } from 'react';
import { items } from './shoeslist.js';;


export const Shop = () => {

  const [cartItems, setCartItems] = useState([]);


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
      <div className="cart_summary flex flex-col gap-2">
        <h2>Cart Summary</h2>
        <div>
          <ul className='w-40 flex gap-5'>
            {cartItems.map((item, idx) => (
              <li className='flex flex-col gap-3 text-sm h-72 w-40' key={`cart-item-${idx}`}><img className="cart_item_img w-40" src={item.image} alt="" />
                {item.name}
                <button className='text-lg text-center bg-yellow-main text-teal-main w-40 rounded-md' onClick={() => handleRemoveFromCart(item.id)}>Remove from cart</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
// };

export default Shop;