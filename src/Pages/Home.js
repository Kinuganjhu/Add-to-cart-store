
import useFetch from './api/useFetch';
import { Link } from 'react-router-dom';
const Home = () => {
  const [data] = useFetch('https://fakestoreapi.com/products');

  return (
    <div className="home">
      {data.map((item) => (
        <div key={item.id} className="product">
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <Link to={`Details/${item.id}`} className="details-link">Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
