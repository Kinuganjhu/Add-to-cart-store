import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const body = await response.json();
        setData(body);
      } catch (error) {
        alert(`${error.name}: ${error.message}`);
      }
    };

    fetchData();

    return () => null;
  }, [url]);

  return [data];
};

export default useFetch;
