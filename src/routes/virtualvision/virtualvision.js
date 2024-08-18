import { Routes, Route } from 'react-router-dom';
import React from 'react';
import img from "./virtualvision.png"; // Assuming the image is for VirtualVision
import { VirtualVisionProducts } from './VirtualVisionProducts.js'; // Assuming a file for virtual vision products
import ProductInfo from '../../components/ProductInfo.js';
const VirtualVision = {
  name: "virtual-vision", // Add name property for routing
  info: "Unleash the power of immersive technology for precise visual diagnostics. Experience streamlined workflows, enhanced patient comfort, and unparalleled accuracy. Elevate your practice with Virtual Vision and redefine patient care.",
  img: img,
};



function VirtualVisionPage() {
  return (
    <Routes>
      {VirtualVisionProducts.map((product) => (
        <Route
          key={product.id}
          path={`${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          element={<ProductInfo product={product} />}
        />
      ))}
    </Routes>
  );
}

export { VirtualVisionProducts, VirtualVision, VirtualVisionPage };