import { Routes, Route } from 'react-router-dom';
import React from 'react';
import img from "./huvitz.jpg"; // Assuming the image is for Huvitz
import { HuvitzProducts } from './HuvitzProducts'; // Assuming a file for Huvitz products
import ProductInfo from '../../components/ProductInfo';

const huvitz = {
  name: "huvitz", // Add name property for routing
  info: "A leading provider of ophthalmic equipment for precision diagnostics. Experience advanced technology, reliable performance, and exceptional patient outcomes.",
  img: img,
};



function HuvitzPage() { // Function name changed for consistency
  return (
    <Routes>
      {HuvitzProducts.map((product) => (
        <Route
          key={product.id}
          path={`${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          element={<ProductInfo product={product} />}
        />
      ))}
    </Routes>
  );
}

export { HuvitzProducts, huvitz, HuvitzPage };