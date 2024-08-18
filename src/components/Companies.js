// CompanyGrid.js
import React from 'react';
import  './Companies.css'

const CompanyGrid = ({message, companies }) => {
  return (
    <section id="features">
      <div className="feature-header">
        <h2>{message}</h2>
      </div>
      <div className="feature-grid">
        {companies.map((company, index) => (
          <div className="feature-item" key={index}>
            <a href={company.link}>
              <img
                src={company.image}
                alt="Product Name"
                className="feature-img"
                onError={(e) => console.error(`Failed to load image: ${company.image}`, e)}
              />
              <div className="overlay"></div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyGrid;
