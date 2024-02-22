// Import necessary modules
import React from 'react';

// Define ExampleCarouselImage component
const ExampleCarouselImage = ({ text }) => {
  return (
    <img
      className="d-block w-100"
      src={`../Assests/LEETCODE_PRO.jpg`}
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
