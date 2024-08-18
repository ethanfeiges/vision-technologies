import { Routes, Route } from 'react-router-dom';
import React from 'react';
import img from "./Marco.png"; // Assuming the image is for Marco
import { marcoProducts } from './MarcoProducts'; // Assuming a file for Marco products
import ProductInfo from '../../components/ProductInfo';

const marco = {
  name: "marco", // Add name property for routing
  info: "Precision ophthalmic equipment for comprehensive eye care. Experience advanced technology, reliable performance, and exceptional patient outcomes.",
  img: img,
};


function MarcoPage() { // Function name changed for consistency
  return (
    <Routes>
      {marcoProducts.map((product) => (
        <Route
          key={product.id}
          path={`${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          element={<ProductInfo product={product} />}
        />
      ))}
    </Routes>
  );
}

export { marcoProducts, marco, MarcoPage };


