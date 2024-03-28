import { useParams, Link } from 'react-router-dom';
import useFetch from './api/useFetch';

const Details = () => {
  const [data] = useFetch('https://fakestoreapi.com/products');
  const { id } = useParams();

  // Function to add item to cart
  const handleAddToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(item);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Item added to cart!');
  };

  return (
    <div className="details-container">
      <Link to="/Cart" className="cart-link">🛒</Link>
      {data.map((item) => (
        item.id === parseInt(id) ? (
          <div key={item.id} className="product-box">
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-info">
              <h3>{item.title}</h3>
              <p className="product-description">{item.description}</p>
              <p className="product-category">Category: {item.category}</p>
              <div className="product-actions">
                <button className="product-price">${item.price}</button>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>Add To Cart</button>
              </div>
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
};

export default Details;
