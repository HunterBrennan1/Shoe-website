import React, { useEffect, useState } from 'react';
import { items } from './shoeslist.js';;


export const Shop = () => {

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




  return (

    <section>
      <div>
      </div>
      <div className='search_filter_wrapper'>
        <div className='search_filter_container'>

          <div>

          </div>

          <div className='buttons_container_search flex justify-center flex-wrap w-full gap-10 shadow-lg bg-white '>
            {filters.map((category, idx) => (
              <button onClick={() => handleFilterButtonClick(category)} className={`filter_button ${selectedFilters?.includes(category) ? "active" : ""}  bg-hero-color text-teal-main p-5 px-10 my-10 w-44 rounded-md shadow-lg font-bold cursor-pointer mt-10 flex-row hover:bg-teal-main hover:text-yellow-main`} key={`filters-${idx}`}>
                {category}
              </button>
            ))}
          </div>
          <div className='item_container flex flex-wrap  gap-0 justify-center px-0 w-full mt-10 '>
            {filteredItems.map((item, idx) => (
              <div key={`items-${idx}`} className="item flex flex-col p-5 w-80 min-w-1/5 hover:shadow-lg">

                <img className='item_img' src={item.image} alt=""></img>
                <p className='card_name text-2xl lg:text-lg md:text-sm sm:text-xs text-left py-2 underline underline-offset-4 decoration-teal-main'>{item.name}</p>
                <p className='card_desc'>{item.desc}</p>
                <p>{item.price}</p>
                <div className='category_container'>
                  <p className='category'>{item.category}</p>
                  <a className='live_link_btn' href={item.link} target="_blank">{item.button}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop;