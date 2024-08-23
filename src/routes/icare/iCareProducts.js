import IC100 from "./Ic100/Ic100.webp";
import product2Img2 from "./Ic100/img2.webp";
import product2Img3 from "./Ic100/img3.jpg";
import product2Img1 from "./Ic100/img1.jpg";
import TA01 from "./TA01/TA01i.webp";
import product1Img1 from "./TA01/img1.jpg"
import product1Img2 from "./TA01/img2.jpg"
import product1Img3 from "./TA01/img3.jpg"
import IC200 from "./Ic200/Ic200.webp"
import product3Img1 from "./Ic200/img1.jpg"
import product3Img2 from "./Ic200/img2.webp"
import product3Img3 from "./Ic200/img3.jpg"
import Eidon from "./eidon/Eidon.jpg"
import product4Img1 from "./eidon/img1.webp"
import product4Img2 from "./eidon/img2.webp"
import product4Img3 from "./eidon/img3.jpg"

import product5Img1 from "./compass/img1.jpg"
import product5Img2 from "./compass/img2.png"
import product5Img3 from "./compass/img3.jpg"
export const icareProducts = [
  {
    id: 1,
    name: "iCare® TAO1i Tonometer",
    title: "iCare® TAO1i Tonometer",
    image: TA01,
    images: {
      product1Img1,
      product1Img2,
      product1Img3
    },
    features: {
      feature1: "Non-invasive, painless IOP measurement eliminates the need for anesthesia and improves patient comfort.",
      feature2: "Portable and lightweight design enables quick and easy measurements in various clinical settings.",
      feature3: "Accurate and reliable IOP readings support early detection and management of glaucoma.",
      feature4: "Disposable probes ensure hygienic and infection-free measurements for every patient."
    },
    description: "iCare® TAO1i tonometer for quick and easy IOP measurements without anesthesia or air",
    link: "https://www.icare-world.com/us/product/icare-ta01i-tonometer/"
  },
  {
    id: 2,
    name: "iCare® IC-100 Tonometer",
    title: "iCare® IC-100 Tonometer",
    image: IC100,
    images: {
      product2Img3,
      product2Img1,
      product2Img2,
    },
    features: {
      feature1: "Non-invasive, painless IOP measurement for enhanced patient comfort and compliance.",
      feature2: "Portable and lightweight design enables efficient IOP screening in various clinical settings.",
      feature3: "Rapid, reliable IOP readings support accurate glaucoma diagnosis and management.",
      feature4: "User-friendly interface and automated measurement sequence streamline workflow and improve efficiency."
    },
    description: "iCare® IC-100 tonometer uses patented rebound technology to measure intra-ocular pressure.",
    link: "https://www.icare-world.com/us/product/icare-ic100-tonometer/"
    },
  {
    id: 3,
    name: "iCare® IC-200 Tonometer",
    title: "iCare® IC-200 Tonometer",
    image: IC200,
    images: {
      product3Img1,
      product3Img2,
      product3Img3,
    },
    features: {
      feature1: "Unparalleled measurement flexibility with 200-degree positional freedom for accurate IOP readings in any patient position.",
      feature2: "Rapid, reliable, and non-invasive IOP measurements for enhanced patient comfort and efficiency.",
      feature3: "Advanced technology delivers precise and consistent IOP readings for improved glaucoma management.",
      feature4: "Versatile design suitable for various clinical settings, including surgery and emergency care."
    },
    description: "The iCare® IC-200 delivers rapid, accurate IOP readings in any patient position",
  },
  {
    id: 4,
    name: "iCare® EIDON",
    title: "iCare® EIDON",
    image: Eidon,
    images: {
      product4Img1,
      product4Img2,
      product4Img3
    },
    features: {
      feature1: "Wide-field imaging with TrueColor technology for detailed, high-resolution retinal images.",
      feature2: "Auto-capture and mosaic functionality for comprehensive retinal coverage in a single exam.",
      feature3: "Non-mydriatic imaging capability, allowing for patient comfort and efficient workflows.",
      feature4: "Versatile design for seamless integration into various clinical environments."
    },
    description: "Experience the clarity and precision of wide-field retinal imaging with TrueColor technology.",
    link: "https://www.icare-world.com/us/product/icare-eidon/"
  },
  {
  id: 5,
  name: "iCare® Compass",
  title: "iCare® Compass",
  image: product5Img1,  // Placeholder for the image path
  images: {
    product5Img1,  // Placeholder for additional image paths
    product5Img2,
    product5Img3
  },
  features: {
    feature1: "Advanced fundus perimeter with real-time retinal tracking for accurate visual field testing.",
    feature2: "TrueColor confocal imaging for detailed and high-resolution retinal images.",
    feature3: "Combines structural and functional analysis for comprehensive glaucoma management.",
    feature4: "User-friendly interface with automated functions to enhance clinical workflow and efficiency."
  },
  description: "The iCare® Compass provides precise visual field testing with integrated TrueColor fundus imaging.",
  link: "https://www.icare-world.com/us/product/icare-compass/"
}

  // ... more products
];