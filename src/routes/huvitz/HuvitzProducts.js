import product1 from "./Refractor/refractor.webp";
import product1Img1 from "./Refractor/img1.png";
import product1Img2 from "./Refractor/img2.jpg";
import product1Img3 from "./Refractor/img3.jpg";
import product2 from "./Lensmeter/Lensmeter.webp";
import product2Img1 from "./Lensmeter/img1.jpg";
import product2Img2 from "./Lensmeter/img2.webp";
import product2Img3 from "./Lensmeter/img3.jpg";
import product3 from "./Kera/Kera.webp";
import product3Img1 from "./Kera/img1.jpg";
import product3Img2 from "./Kera/img2.jpg";
import product3Img3 from "./Kera/img3.webp";
export const HuvitzProducts = [
  {
    id: 1,
    name: 'HDR-9000 Digital Refractor',
    title: "HDR-9000 Digital Refractor",
    image: product1,
    images: {
      product1Img1,
      product1Img2,
      product1Img3,
    },
    features: {
      feature1: "Accelerate refraction with rapid, precise measurements using advanced digital technology.",
      feature2: "Enhance patient comfort and engagement with a streamlined 21-point exam process and intuitive controls.",
      feature3: "Optimize workflow with wireless connectivity and remote control options for increased efficiency.",
      feature4: "Deliver exceptional patient care through clear, informative displays and accurate prescription generation."
    },
    description: "Streamline workflows & achieve exceptional multifocal lens measurements.  Empower superior patient care.",
  },
  {
    id: 2,
    name: "HLM-9000 Auto Lensmeter",
    title: "HLM-9000 Auto Lensmeter",
    image: product2,
    images: {
      product2Img1,
      product2Img2,
      product2Img3,
    },
    features: {
      feature1: "High-precision Hartmann sensor technology ensures accurate measurements for all lens types, including multifocal and high-index lenses.",
      feature2: "Advanced blue light hazard measurement protects patient eye health by assessing blue light filtration of lenses.",
      feature3: "Intuitive interface and automated functions streamline workflow and enhance efficiency.",
      feature4: "Wireless connectivity and EMR integration optimize practice management and data sharing."
    },
    description:
      "Empower confident diagnoses with a portable, user-friendly device delivering fast and accurate results."
  },
    
    { 
    id: 3,
    name: "HRK-9000a Ref Keratometer",
    title: "HRK-9000a Ref Wavefront Autorefractor Keratomete",
    image: product3,
    images: {
      product3Img1,
      product3Img2,
      product3Img3,
    },
    features: {
      feature1: "Advanced Hartmann sensor technology delivers precise corneal curvature measurements for accurate contact lens fitting and refractive surgery planning.",
      feature2: "Comprehensive eye analysis functions, including meibography and tear film break-up time (TFBUT) assessment, support overall eye health evaluation.",
      feature3: "Intuitive touchscreen interface and streamlined workflow enhance user experience and efficiency.",
      feature4: "Wireless connectivity and EMR compatibility optimize practice management and data sharing."
    },
    description:
        "Elevate eye exams with a combined objective and subjective refraction approach. Achieve unparalleled accuracy and streamline workflows,"
  
  },
  // ... more products
];