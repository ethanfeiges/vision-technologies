import React from 'react';
import ProductList from "../components/ProductList.js";
import { reichert } from "./reichert/Reichert.js";
import { reichertProducts } from "./reichert/ReichertProducts.js";


import { s4optik } from "./s4optik/s4optik.js";
import { s4optikProducts } from './s4optik/s4optikProducts.js';
import { Zeiss } from "./zeiss/Zeiss.js"
import { ZeissProducts } from './zeiss/ZeissProducts.js';
import { VirtualVisionProducts } from './virtualvision/VirtualVisionProducts.js';
import { VirtualVision } from "./virtualvision/virtualvision.js"
import { marco } from "./marco/marco.js"
import { marcoProducts } from "./marco/MarcoProducts.js"
import { icare } from "./icare/iCare.js";
import { icareProducts } from './icare/iCareProducts.js';
import { huvitz, HuvitzProducts } from "./huvitz/huvitz.js";
import { Haag } from "./haag-streit/HS.js";
import { HaagProducts } from "./haag-streit/HaagProducts.js";
import { EyefficientProducts, Eyefficient } from './eyefficient/eyefficient.js';

import {ESwin, ESwinProducts} from "./e-swin/e-swin.js"
console.log(ZeissProducts)
const Products = ({ n }) => {
  if (n === 1) {
    return (
      <div className="App">
        <ProductList products={reichertProducts} company={reichert} />
      </div>
    );
  } if(n === 2) {
    return (
      <div className="App">
        <ProductList products={HaagProducts} company={Haag} />
      </div>
    );
  } if(n === 3) {
    return (
      <div className="App">
        <ProductList products={icareProducts} company={icare} />
      </div>
    );
  }
   if(n === 4) {
    return (
      <div className="App">
        <ProductList products={s4optikProducts} company={s4optik} />
      </div>
    );
   }
  if(n === 5) {
    return (
      <div className="App">
        <ProductList products={HuvitzProducts} company={huvitz} />
      </div>
    );
  }
  if(n === 7) {
    return (
      <div className="App">
        <ProductList products={EyefficientProducts} company={Eyefficient} />
      </div>
    );
  }
  if(n === 8) {
    return (
      <div className="App">
        <ProductList products={VirtualVisionProducts} company={VirtualVision} />
      </div>
    );
  }
  if(n === 9) {
    return (
      <div className="App">
        <ProductList products={ZeissProducts} company={Zeiss} />
      </div>
    );
  }
  if(n === 10) {
    return (
      <div className="App">
        <ProductList products={marcoProducts} company={marco} />
      </div>
    );
  }
  if(n === 11) {
    return (
      <div className="App">
        <ProductList products={ESwinProducts} company={ESwin} />
      </div>
    );
  }
  else {
    return null;
  }
};

export default Products;
