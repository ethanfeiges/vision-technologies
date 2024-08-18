import product1 from "./examLanes.webp";
import product4 from "./Retinomax/k+.webp";
import product4Img1 from "./Retinomax/img1.png"
import product4Img2 from "./Retinomax/img2.jpg"
import product4Img3 from "./Retinomax/img3.jpg"
import value from "./Value/value.webp";
import product1Img1 from "./Value/img1.jpg"
import product1Img2 from "./Value/img2.png"
import product1Img3 from "./Value/img3.webp"
import product1Img4 from "./Value/img4.jpg"
import product1Img5 from "./Value/img5.webp"
import combo from "./Combo/Combo.webp"

import product2Img1 from "./Premium/img1.jpg"
import product2Img2 from "./Premium/img2.jpg"
import product2Img3 from "./Premium/img3.jpg"

import product3Img1 from "./Combo/img1.jpg"
import product3Img2 from "./Combo/img2.jpg"
export const s4optikProducts = [
  {
    id: 1,
    name: 'Exam Lane Value Package',
    title: "S4Optik Value Lane Package",
    images: {
      img1: product1Img1,
      img2: product1Img2,
      img3: product1Img3,
      img4: product1Img4,
      img5: product1Img5,
    },
    image: value,
    features: {
      feature1: "1800-CH Chair: Ergonomic design with adjustable height and tilt for optimal patient comfort and clinician ease.",
      feature2: "1600-ST Stand: Sturdy and stable base with multiple configurations for accommodating various instruments and equipment.",
      feature3: "SL-Z3 Slit Lamp: Zeiss-inspired optics deliver exceptional image quality and precision for comprehensive eye examinations.",
      feature4: "SL-Y100 Phoropter: User-friendly interface and accurate lens adjustments for efficient refraction procedures.",
      feature5: "VA-1 Acuity System: High-resolution display and customizable test sequences for comprehensive visual acuity assessment."
    },
    description: "1800-CH Chair, 1600-ST Stand, SL-Z3 Slit Lamp (Zeiss Style), SL-Y100 Phoropter, VA-1 Acuity System"
  },
  {
    id: 2,
    name: 'Exam Lane Premium Package',
    title: "S4Optik Combo Lane Package",
    images: {
      img1: product2Img1,
      img2: product2Img2,
      img3: product2Img3,
      img4: product1Img4,
      img5: product1Img5,
    },
    image: product1,
    features: {
      feature1: "2500-CH Chair: Advanced electric controls with memory presets for personalized patient positioning.",
      feature2: "2000-ST Stand: Heavy-duty construction and large instrument tray for optimal stability and workspace.",
      feature3: "SL-H5 Slit Lamp (Haag Style): Classic Haag-style optics combined with modern technology for precise and comfortable examinations.",
      feature4: "SL-Y100 Phoropter: User-friendly interface and accurate lens adjustments for efficient refraction procedures.",
      feature5: "VA-1 Acuity System: High-resolution display and customizable test sequences for comprehensive visual acuity assessment."
    },
    description: "2500-CH Chair, 2000-ST Stand, SL-H5 Slit Lamp (Haag Style), SL-Y100 Phoropter, VA-1 Acuity System"
  },
  {
    id: 3,
    title: "S4Optik Combo Lane Package",
    name: 'Exam Lane Combo Package',
    image: combo,
    images: {
      img1: product3Img1,
      img2: product3Img2,
      img3: product1Img4,
      img4: product1Img5,
    },
    
    description: "1800-CB Chair/Stand Combo, SL-Z2 Slit Lamp, SL-Y100 Phoropter, VA-1 Acuity System"
  },
  
  {
    id: 4,
    name: "Retinomax K+ Screen",
    title: "Retinomax K+ Screen",
    images: {
      img1: product4Img1,
      img2: product4Img2,
      img3: product4Img3
    },
    image: product4,
    features: {
    feature1: "Tilting 3.5-inch LCD screen offers versatile viewing angles for user comfort",
    feature2: "Focus Assist guides examiners to optimal focusing point with color-coded indicators",
    feature3: "Extended battery life enables uninterrupted use during group screenings and surgeries",
    feature4: "Low-reflection screen reduces glare for improved image clarity"
    },
    link: "https://www.s4optik.com/product/righton-retinomax-screen-autorefractometer",
    description:
      'Enhance practice with the Retinomax K+ Screen, offering quick and accurate retinal screenings. Equip with efficient diagnostic tools for streamlined patient assessments and improved clinical outcomes',
  },
  // ... more products
];