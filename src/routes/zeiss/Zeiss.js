import { Routes, Route } from 'react-router-dom';
import React from 'react';
import img from "./Zeiss.png";
import { ZeissProducts } from './ZeissProducts';
import ProductInfo from "../../components/ProductInfo.js";

const Zeiss = {
  name: "zeiss",
  info: "(Pre-owned products) Elevate your practice with Zeiss. Discover cutting-edge ophthalmic solutions that redefine precision, efficiency, and patient care. See beyond limitations, diagnose with confidence, and deliver extraordinary visual outcomes.",
  img: img
};


function ZeissPage() {
  return (
    <Routes>
      {ZeissProducts.map(product => (
        <Route key={product.id} path={`${product.name.toLowerCase().replace(/\s+/g, '-')}`} element={<ProductInfo product = {product} />} />
      ))}
    </Routes>
  );
}

export { ZeissProducts, Zeiss, ZeissPage };