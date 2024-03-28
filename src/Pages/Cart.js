import React, {
  useState
} from 'react';
const Cart = () => {
  // Retrieve cart items from local storage
  const [cartItems,
    setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart">
      <h3>Your Cart:</h3>
      {cartItems.length === 0 ? (
      <p>
Your cart is empty.
      </p>
    ): (
      <ul>
          {cartItems.map((item, index) => (
        <li key={index}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
      ))}
    </ul>
    )}
  </div>
);
};

export default Cart;