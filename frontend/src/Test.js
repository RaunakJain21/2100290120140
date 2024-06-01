const apiUrl = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';
const validationToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjI2NDQ2LCJpYXQiOjE3MTcyMjYxNDYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU2OGU0Mjc0LTY1MmUtNGJiNS05MjFiLWEyMTMxNjI5ZTU5OCIsInN1YiI6InJhdW5ha2phaW44OTc5QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImFmZm9yZCIsImNsaWVudElEIjoiZTY4ZTQyNzQtNjUyZS00YmI1LTkyMWItYTIxMzE2MjllNTk4IiwiY2xpZW50U2VjcmV0IjoiRWh5aVpGUHJ1ZXpVdHVlbiIsIm93bmVyTmFtZSI6IlJhdW5hayIsIm93bmVyRW1haWwiOiJyYXVuYWtqYWluODk3OUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwMjkwMTIwMTQwIn0.gyoMAhc5k3_iOzTCb5j6y8i0tmA-483VviqFnSQMFWM';

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${validationToken}`,
    'Content-Type': 'application/json' // Optional: Depending on the API, you may need to specify the content type
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('API Data:', data);
})
.catch(error => {
  console.error('Error fetching API data:', error);
});
