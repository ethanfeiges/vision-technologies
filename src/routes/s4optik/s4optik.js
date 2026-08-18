import { Routes, Route } from 'react-router-dom';
import React from 'react';
import img from "./s4optik.png"; // Assuming the image is for s4optik
import { s4optikProducts } from './s4optikProducts'; // Assuming a file for s4optik products
import ProductInfo from "../../components/ProductInfo.js";
const s4optik = {
  name: "s4optik", // Add name property for routing
  info: "Leverage the power of s4optik with industry-leading technology and expert guidance. Experience unparalleled precision, streamlined workflows, and a focus on exceptional patient care.",
  img: img,
};

function S4optikPage() { // Function name changed for consistency
  return (
    <Routes>
      {s4optikProducts.map((product) => (
        <Route
          key={product.id}
          path={product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
          element={<ProductInfo product={product} />}
        />
      ))}
    </Routes>
  );
}

export { s4optikProducts, s4optik, S4optikPage };