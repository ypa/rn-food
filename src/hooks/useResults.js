import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('hi there!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Los Angeles'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // Call searchApi when component
  // is first rendered
  // searchApi('pasta');  // DONT call it directly it'll cause infinite loop use useEffect
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
