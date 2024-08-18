import { Routes, Route } from 'react-router-dom';
import React from 'react';
import img from "./eyefficient.png"; // Assuming the image is for Eyefficient
import { EyefficientProducts } from './EyefficientProducts'; // Assuming a file for Eyefficient products
import ProductInfo from '../../components/ProductInfo';

const Eyefficient = {
  name: "eyefficient", // Add name property for routing
  info: "Streamlined solutions for ophthalmic practices. Experience enhanced efficiency, improved patient flow, and optimized operations.",
  img: img,
};


function EyefficientPage() { // Function name changed for consistency
  return (
    <Routes>
      {EyefficientProducts.map((product) => (
        <Route
          key={product.id}
          path={`${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          element={<ProductInfo product={product} />}
        />
      ))}
    </Routes>
  );
}

export { EyefficientProducts, Eyefficient, EyefficientPage };