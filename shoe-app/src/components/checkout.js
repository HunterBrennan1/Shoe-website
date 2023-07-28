import Nav from "../components/nav";



export const Checkout = ({ cartItems, totalPrice, handleRemoveFromCart }) => {
  return (
    <section>
      <Nav />

      <div className="checkout-container">
        <h2 className="text-2xl font-bold text-center pt-9 mb-10 text-teal-main">Checkout</h2>
        <ul className="checkout-list">
          {cartItems.map((item, idx) => (
            <li key={`checkout-item-${idx}`} className="flex flex-col gap-3 text-sm h-72 w-40">
              <img className="checkout_item_img w-40" src={item.image} alt="" />
              {item.name}<br />{item.price}
              <button className="text-lg text-center bg-yellow-main text-teal-main w-40 rounded-md" onClick={() => handleRemoveFromCart(item.id)}>Remove from cart</button>
            </li>
          ))}
        </ul>
        <div className="total_price_container">
          <p className="text-center mt-2">Total Price:&#x24;{totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </section>

  )
}

export default Checkout;