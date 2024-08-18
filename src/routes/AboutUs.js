import React from 'react';
import Bill from "../imgs/Founder.webp";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <div className="textContainer">
        <h2>About Us</h2>
        <p>
          Vision Technologies, Inc. is a leading supplier of ophthalmic equipment and services in the Pacific Northwest. Since 1993, we've delivered cutting-edge solutions with a commitment to personalized service.
        </p>
        <p>
          Our mission is to serve as a trusted resource for ophthalmic products and services. Specializing in imaging and refraction technologies, we support all our products with expert service and consultation.
        </p>
        <p>
          Vision Technologies partners with healthcare providers, enhancing clinical assessment capabilities and long-term profitability.
        </p>
      </div>
      <div className="photoContainer">
        <h1>President and CEO</h1>
        <img src={Bill} alt="Founder" />
        <h2>Bill Benedict</h2>
      </div>
    </div>
  );
};

export default AboutUs;
