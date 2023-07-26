import React from 'react';
import { useState, useEffect } from 'react';
import { items } from './shoeslist.js';;

const ShoppingCartModal = ({ isOpen, onClose }) => {

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




  return isOpen ? (
    <div className="modal-overlay fixed h-full top-0 right-0 bg-white">
      <div className="modal-content absolute top-0 right-0 h-full w-96 bg-white p-5 shadow-lg">
        <h2>Shopping Cart</h2>
        <div>
          <ul>
            {cartItems.map((item, idx) => (
              <li className='flex flex-row gap-5' key={`cart-item-${idx}`}><img className="cart_item_img w-10" src={item.image} alt="" />
                {item.name}
                <button className='text-2xl' onClick={() => handleRemoveFromCart(item.id)}>Remove from cart</button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null;
};

export default ShoppingCartModal;