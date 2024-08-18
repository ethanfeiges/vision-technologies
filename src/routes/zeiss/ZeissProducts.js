import product1 from "./Atlas-9000/atlas.jpg";
import product1Img1 from "./Atlas-9000/img1.jpg";
import product1Img2 from "./Atlas-9000/img2.jpg";
import product1Img3 from "./Atlas-9000/atlas-3.jpg";

import product2 from "./Cirrus4000/Cirrus4000.jpg";
import product2Img1 from "./Cirrus4000/img1.webp";
import product2Img2 from "./Cirrus4000/img2.jpg";
import product2Img3 from "./Cirrus4000/img3.jpg";

import product3 from "./Cirrus-5000/Cirrus5000.jpg";
import product3Img3 from "./Cirrus-5000/img3.jpg";
import product3Img2 from "./Cirrus-5000/img2.jpg";
import product3Img1 from "./Cirrus-5000/img1.jpg";
import product4 from "./Cirrus-500/Cirrus500.webp";
import product4Img1 from "./Cirrus-500/img1.jpg";
import product4Img2 from "./Cirrus-500/img2.jpg";
import product4Img3 from "./Cirrus-500/img3.webp";

import product5 from "./Matrix715/Matrix715.jpg";
import product5Img1 from "./Matrix715/img1.jpg";
import product5Img2 from "./Matrix715/img2.jpg";
import product5Img3 from "./Matrix715/img3.jpg";
import product6 from "./Cirrus-400/Cirrus400.jpg";
import product6Img1 from "./Cirrus-400/img1.png";
import product6Img2 from "./Cirrus-400/img2.jpg";
import product6Img3 from "./Cirrus-400/img3.jpg";
import product7 from "./HFA/HFA.webp";
import product7Img3 from "./HFA/img3.jpg";
import product7Img1 from "./HFA/img1.jpg";
import product7Img2 from "./HFA/img2.png";


export const ZeissProducts = [{
  id: 1,
  name: 'Atlas 9000',
  title: "ATLAS 9000 Corneal Topography System",
  image: product1,
  description: "Visualize and analyze the cornea like never before, transforming complex data into actionable insights for optimal patient care.",
  images: {
    img1: product1Img1,
    img2: product1Img2,
    img3: product1Img3,
  },
  features:
  {
    featrue1: "Proven Placido Disk Technology with patented Cone-of-Focus™ Alignment System.",
    feature2: "SmartCapture™ Image Analysis Technology analyzes multiple images during alignment and automatically selects the highest quality image.",
    feature3: "MasterFit™ II Contact Lens Software helps streamline the fitting of gas permeable (GP) lenses and guides you through difficult and specialty fits.",
    feature4: "Data compatibility with previous generation ATLAS Corneal Topography Systems to facilitate data management and patient follow up.",
  }
},
{
  id: 2,
  name: 'Cirrus OCT 4000',
  title: "Cirrus OCT 4000",
  image: product2,
  images: {
    img1: product2Img1,
    img2: product2Img2,
    img3: product2Img3,
  },
  features: {
    feature1: "Delivers high-resolution, 3D images of the eye's anterior and posterior segments for comprehensive diagnosis.",
    feature2: "Delivers fast, high-quality image data, optimizing workflow and minimizing patient exam time.",
    feature3: "Utilizes advanced algorithms to track disease progression, quantify disease severity, and support informed clinical decisions.",
    feature4: "Offers anterior segment imaging, integration with Windows 10 and review station software, and compatibility with various clinical settings."
  },
  description: "Capture intricate details of the retina and subretinal layers. Empower confident treatment decisions and improved patient outcomes.",
},


{
  id: 3,
  name: 'Cirrus OCT 5000',
  title: "Cirrus OCT 5000",
  image: product3,
  images: {
    img1: product3Img1,
    img2: product3Img2,
    img3: product3Img3,
  },
  features: {
    feature1: "Delivers enhanced image clarity and precision with upgraded hardware and Smart HD scans.",
    feature2: "Optimizes scan accuracy through FastTrac retinal tracking, minimizing motion artifacts and enabling precise comparison.",
    feature3: "Offers comprehensive retinal analysis with large-screen display, Cube data for multi-view assessment, and automated fovea centering,",
    featue4: "Expands diagnostic capabilities with AngioPlex OCT angiography for non-invasive 3D microvascular imaging."
  },
  description: "Uncover the intricacies of the retina and anterior segment, and deliver advanced imaging capabilities and actionable insights.",
  link: "https://www.zeiss.com/meditec/en/products/optical-coherence-tomography-devices/cirrus-500-5000.html"
},
{
  id: 4,
  name: 'Cirrus OCT 500',
  title: "Cirrus OCT 500",
  images: {
    img1: product4Img1,
    img2: product4Img2,
    img3: product4Img3,
  },
  features: {
  feature1: "Simplifies complex eye care with user-friendly interface and wide-ranging applications.",
  feature2: "Offers in-depth retinal analysis through macular thickness, ganglion cell, and progression assessments.",
  feature3: "Supports comprehensive eye disease management, including glaucoma, retinal disorders, cataract surgery, and corneal conditions.",
  feature4: "Provides valuable data for treatment planning and monitoring with normative data and comparative analysis tools."
  },
  image: product4,

  link: "https://www.zeiss.com/meditec/en/products/optical-coherence-tomography-devices/cirrus-500-5000.html",
  description: "Uncover hidden details within the eye with unprecedented clarity. Transform routine examinations into insightful diagnoses."
},
{
  id: 5,
  name: 'Matrix 715',
  title: "Matrix 715 Perimeter",
  image: product5,
  images: {
    img1: product5Img1,
    img2: product5Img2,
    img3: product5Img3,
  },
  features: {
    feature1: "Utilizes frequency doubled sinusoidal gratings for accurate visual field testing.",
    feature2: "Employs advanced fixation control with video eye monitoring and Heijl-Krakau method for reliable results.",
    feature3: "Offers comprehensive test strategies, including full threshold, supra-threshold, and macular testing options.",
    feature4: "Includes Glaucoma Hemifield Test (GHT) software for detailed data analysis and interpretation."
  },
  description: "Detect early signs of vision loss with unmatched precision. Streamline your glaucoma management workflow while providing superior patient care."
},
{
  id: 6,
  name: 'Cirrus OCT 400',
  title: "Cirrus OCT 400",
  image: product6,
  features: {
    feature1: "Provides high-resolution imaging of the retina and optic nerve for detailed analysis.",
    feature2: "Offers macular thickness analysis, RNFL thickness analysis, and a normative database to aid in diagnosis.",
    feature3: "Includes advanced visualization and 3D display for comprehensive evaluation.",
    feature4: "Features Live OCT Fundus technology for fundus imaging without additional equipment."
  },
  images: {
    img1: product6Img1,
    img2: product6Img2,
    img3: product6Img3,
  },
  link: "https://www.youtube.com/watch?v=v4sMI8Iorxg",
  description: "Deliver essential OCT technology without breaking the budget. Enhance patient care and efficiency with a streamlined, cost-effective solution."
},
{
  id: 7,
  name: 'HFA 740i',
  title: "HFA 740i",
  features: {
    feature1: "Early detection and monitoring of glaucoma through advanced GPA software, VFI, and Pattern Deviation Plots.",
    feature2: "Comprehensive testing with Kinetic, Custom, Social Security Disability options, and STATPAC comparison.",
    feature3: "User-friendly 40 GB touchscreen interface with ergonomic design and networking capabilities.",
    feature4: "Reliable, accurate results with customizable printouts and DICOM Gateway connectivity."
  },
  images: {
    img1: product7Img1,
    img2: product7Img2,
    img3: product7Img3,
  },
  image: product7, 
  description: "Identify subtle visual field changes early, preventing irreversible vision loss. Optimize your glaucoma management workflow with reliable, efficient testing."
},
  // ... more products
];
