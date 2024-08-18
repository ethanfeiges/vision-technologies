import VrXII from "./VRXII/VRXII.webp";
import SightCheck from "./SightCheck/SightCheck.webp";
import product1img1 from "./VRXII/img1.jpg";
import product1img2 from "./VRXII/img2.jpg";
import product1img3 from "./VRXII/img3.jpg";
export const reichertProducts = [
  {
    id: 1,
    name: 'VrXII',
    title: "VRxII",
    images: {
      product1img1,
      product1img2,
      product1img3,
    },
    features: {
      feature1: "Ultra-slim profile optimizes patient visibility and maximizes clinical space.",
      feature2: "Advanced wireless technology enables seamless EMR integration and efficient workflow.",
      feature3: "Precision-engineered optics and mechanics deliver superior image quality and accurate measurements.",
      feature4: "Intuitive touchscreen interface and Bluetooth connectivity enhance user experience and productivity."
    },
    image: VrXII,
    description: 'The thinnest, most compact digital refractor with premium motors and metal housing for unparalleled speed.',
    link: "https://www.reichert.com/en/products/phoroptor-vrx"
  },
  {
    id: 2,
    name: 'SightCheck',
    title: "SightCheck",
    image: SightCheck,
    images: {
      image: SightCheck
    },
    features: {
      feature1: "Streamlined design and intuitive interface optimize workflow and efficiency.",
      feature2: "Comprehensive suite of guided tests enables accurate and consistent patient assessments.",
      feature3: "Seamless EMR integration eliminates transcription errors and improves patient care.",
      feature4: "Advanced technology delivers enhanced diagnostic capabilities and treatment planning."
    },
    description:
      'Reduce patient wait times and optimize clinic flow with fast, in-house screenings. Gain data-driven insights to confidently make pre-operative decisions.',
  },
  // ... more products
];