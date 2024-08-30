import product1 from "./E-Eye/e-eye.png";
import product1Img1 from "./E-Eye/img1.png";
import product1Img2 from "./E-Eye/img2.png";
import product1Img3 from "./E-Eye/img3.png";
import product2 from "./Tearcheck/tearcheck.png";
import product2Img1 from "./Tearcheck/img1.png";
import product2Img2 from "./Tearcheck/img2.png";
import product2Img3 from "./Tearcheck/img3.png";


export const ESwinProducts = [
    {  
        id: 1,
        name: "E-Eye",
        title: "E-Eye",
        features: {
            feature1: "Treats MGD effectively with patented IRPL® technology and regulated light pulses.",
            feature2: "Delivers rapid relief from dry eye symptoms with lasting effects up to 3 years.",
            feature3: "Provides a quick, non-invasive treatment experience with minimal patient discomfort.",
            feature4: "Clinically proven to improve symptoms and reduce dependence on eye drops."
        },
        images: {
            product1Img1,
            product1Img2,
            product1Img3,
        },
        image: product1,
        description: "Alleviate dry eye symptoms, enhance gland function, and elevate patient care with cutting-edge IRPL® technology for effective, lasting results.",
        link: "https://www.esw-vision.com/e-eye"
    },
    {
        id: 2,
        name: "Tearcheck®",
        title: "Tearcheck®",
        images: {
            product2Img1,
            product2Img2,
            product2Img3,
        },
        features: {
            feature1: "Performs advanced dry eye analysis with patented exams like TFSE® and OSIE®.",
            feature2: "Offers comprehensive assessments including meibography, blink analysis, and eye redness.",
            feature3: "Enhances diagnostic accuracy with high-resolution imaging and real-time scoring.",
            feature4: "Improves patient compliance with easy-to-understand results and visual feedback."
        },
        image: product2,
        description: "Revolutionize dry eye evaluations with Tearcheck®, featuring patented exams and advanced imaging for precise, fast, and user-friendly diagnostics.",
        link: "https://www.esw-vision.com/tearcheck"

    }
]