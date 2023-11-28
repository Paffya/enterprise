import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = ({ subcat }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the category API
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get('http://192.168.17.8:3000/api/category/subcatlist');
        setCategoryData(response.data);
      } catch (error) {
        console.error('Error fetching category data:', error);
        setError(error.message || 'An error occurred while fetching category data.');
      }
    };

    fetchCategoryData();
  }, []);

  useEffect(() => {
    // Fetch data from the tag API using the provided subcat
    const fetchTagData = async () => {
      try {
        const response = await axios.get(`http://192.168.17.8:3000/api/post/tag/${subcat}`);
        setTagData(response.data);
      } catch (error) {
        console.error('Error fetching tag data:', error);
        setError(error.message || 'An error occurred while fetching tag data.');
      }
    };

    // Check if subcat is available before making the request
    if (subcat) {
      fetchTagData();
    }
  }, [subcat]);

  // Render your component with the fetched data

  return (
    <div>
      <h2>Category Data</h2>
      <ul>
        {categoryData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <h2>Tag Data</h2>
      <ul>
        {tagData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default YourComponent;
