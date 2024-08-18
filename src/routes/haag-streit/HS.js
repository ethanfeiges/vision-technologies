import { Routes, Route } from 'react-router-dom';
import React from 'react';
import img from "./Haag.jpg"; // Assuming the image is for Haag
import { HaagProducts } from './HaagProducts'; // Assuming a file for Haag products
import ProductInfo from "../../components/ProductInfo.js"
const Haag = {
  name: "haag-streit", // Add name property for routing
  info: "Precision ophthalmic equipment for comprehensive eye care. Experience advanced technology, reliable performance, and exceptional patient outcomes.",
  img: img,
};


function HaagPage() { // Function name changed for consistency
  return (
    <Routes>
      {HaagProducts.map((product) => (
        <Route
          key={product.id}
          path={`${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          element={<ProductInfo product={product} />}
        />
      ))}
    </Routes>
  );
}

export { HaagProducts, Haag, HaagPage };