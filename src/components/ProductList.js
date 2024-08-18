import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ProductList.css';
import { useEffect } from 'react';
const ProductCard = ({ product, company }) => {
  const formattedName = product.name.toLowerCase().replace(/\s+/g, '-'); // Format product name

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>   

        <p className="product-description">{product.description}</p>   

      </div>
      <Link to={`/${company.name}/${formattedName}`} className="product-button">
        More Info
      </Link>
    </div>
  );
};

const ProductList = ({ products, company }) => {

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 100);
  }, []);
  return (

    <div className="all">
      <div className="companyTitle">
        <img src={company.img} alt="" />
        <p>{company.info}</p>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            company={company}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;