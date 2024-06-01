import React, { useEffect, useState } from 'react';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const validationToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjI2OTczLCJpYXQiOjE3MTcyMjY2NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU2OGU0Mjc0LTY1MmUtNGJiNS05MjFiLWEyMTMxNjI5ZTU5OCIsInN1YiI6InJhdW5ha2phaW44OTc5QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImFmZm9yZCIsImNsaWVudElEIjoiZTY4ZTQyNzQtNjUyZS00YmI1LTkyMWItYTIxMzE2MjllNTk4IiwiY2xpZW50U2VjcmV0IjoiRWh5aVpGUHJ1ZXpVdHVlbiIsIm93bmVyTmFtZSI6IlJhdW5hayIsIm93bmVyRW1haWwiOiJyYXVuYWtqYWluODk3OUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwMjkwMTIwMTQwIn0.CDmmqn6gHFOTRHOmwuhFZPjZuyh4E0JIQmcaJajGVpw';
    const fetchData = async () => {
      try {
        const response = await fetch(proxyUrl + apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${validationToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Top N Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>{product.productName}</div>
            <div>{product.price}</div>
            <div>{product.rating}</div>
            <div>{product.discount}</div>
            <div>{product.availability}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListingPage;
