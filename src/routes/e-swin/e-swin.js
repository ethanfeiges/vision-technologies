import { Routes, Route } from 'react-router-dom';
import React from 'react';
import img from "./logo.png"; // Assuming the image is for Eyefficient
import { ESwinProducts } from './ESwinProducts'; // Assuming a file for Eyefficient products
import ProductInfo from '../../components/ProductInfo';

const ESwin = {
  name: "E-Swin", // Add name property for routing
  info: "As a French based company, E-Swin follows the quality standards of ISO13485 and is regularly audited by a notified body.",
  img: img,
};


function ESwinPage() { // Function name changed for consistency
  return (
    <Routes>
      {ESwinProducts.map((product) => (
        <Route
          key={product.id}
          path={`${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          element={<ProductInfo product={product} />}
        />
      ))}
    </Routes>
  );
}

export { ESwinProducts, ESwin, ESwinPage };