import React from 'react';
import ImageSlider from '../components/ImageSlider'; // Adjust the path if needed
import Companies from '../components/Companies'; // Adjust the path if needed
import image1 from '../routes/icare/eidon/Eidon.jpg'; // Import your images
import image2 from '../imgs/Firefly.jpg';
import image3 from '../imgs/Ic200.webp';
import image4 from '../imgs/hdr.png';
import reichert from '../routes/reichert/Reichert.jpg';
import haag from '../routes/haag-streit/Haag.jpg';
import icare from '../routes/icare/icare.jpg';
import s4optik from '../routes/s4optik/s4optik.png';
import huvitz from '../routes/huvitz/huvitz.jpg';
import virtualvision from '../routes/virtualvision/virtualvision.png';
import eyefficient from '../routes/eyefficient/eyefficient.png';
import marco from "../routes/marco/Marco.png";
import zeiss from "../routes/zeiss/Zeiss.png";
import styles from './Home.module.css'; // Ensure to import the CSS file
import eSwin from '../routes/e-swin/logo.png';
const slides = [
  { image: image1, text: 'iCare Eidon', link: "./icare/icare-eidon"},
  {
    image: image2, text: 'S390L (Firefly) Slit Lamp Microscope', link: "./eyefficient/s390l-firefly-digital-slit-lamp-imaging-system" },
  { image: image3, text: 'iCare IC-200', link: "./icare/icare®-ic-200-tonometer"},
  { image: image4, text: 'Huvitz HDR-900', link: "./huvitz/hdr-9000-digital-refractor" },
  // Add more slides as needed
];

const companies = [
  { image: reichert, link: "/reichert" },
  { image: haag, link: "/haag-streit" },
  { image: icare, link: "/icare" },
  { image: s4optik, link: "/s4optik" },
  { image: huvitz, link: "/huvitz" },
  { image: virtualvision, link: "/virtual-vision" },
  { image: eyefficient, link: "/eyefficient" },
  {image: eSwin, link: "/e-swin"}
];

const usedCompanies = [
  { image: marco, link: "/marco" },
  { image: zeiss, link: "/zeiss" },
];

const Home = () => {
  return (
    <div>
    <main className={styles.homepage}>
      <header className={styles.homepageHeader}>
        <div className={styles.headerBox}>
          <h1>Welcome to Our Products</h1>
        </div>
      </header>
    
        <ImageSlider slides={slides} />
      </main>
      <Companies companies={companies} message="Featuring New Items from:" />
      <Companies companies={usedCompanies} message="Offering Used Items From:" />
    </div>
        
  );
};

export default Home;
