import { Routes, Route } from 'react-router-dom';
import React from 'react';
import img from "./icare.jpg"; // Assuming the image is for iCare
import { icareProducts } from './iCareProducts'; // Assuming a file for iCare products
import ProductInfo from '../../components/ProductInfo';

const icare = {
  name: "icare", // Add name property for routing
  info: "Innovative eye care solutions for precise diagnostics. Experience advanced technology, reliable performance, and exceptional patient outcomes.",
  img: img,
};


function ICarePage() { // Function name changed for consistency
  return (
    <Routes>
      {icareProducts.map((product) => (
        <Route
          key={product.id}
          path={`${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          element={<ProductInfo product={product} />}
        />
      ))}
    </Routes>
  );
}

export { icareProducts, icare, ICarePage };