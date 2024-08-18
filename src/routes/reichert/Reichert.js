import { Routes, Route } from 'react-router-dom';
import React from 'react';
import img from "./Reichert.jpg"; // Assuming the image is for Reichert
import { reichertProducts } from './ReichertProducts.js'; // Assuming a file for Reichert products
import ProductInfo from "../../components/ProductInfo.js"
const reichert = {
  name: "reichert", // Add name property for routing
  info: "Precision ophthalmic instruments for comprehensive eye care. Experience advanced technology, reliable performance, and exceptional patient outcomes.",
  img: img,
};

function ReichertPage() { // Function name changed for consistency
  return (
    <Routes>
      {reichertProducts.map((product) => (
        <Route
          key={product.id}
          path={`${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          element={<ProductInfo product={product} />}
        />
      ))}
    </Routes>
  );
}

export { reichertProducts, reichert, ReichertPage };