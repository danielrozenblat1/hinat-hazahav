import React from "react";
import Testimonials from "../components/newRecommends/NewRecommends";
import headerImage from "../images/אילנית ראשית 2.png"
// Import all testimonial images
import recommend1 from "../images/אילנית המלצות 1.png";
import recommend2 from "../images/אילנית המלצות 2.png";
import recommend3 from "../images/אילנית המלצות 3.png";
import recommend4 from "../images/אילנית המלצות 4.png";
import recommend5 from "../images/אילנית המלצות 5.png";
import recommend6 from "../images/אילנית המלצות 6.png";
import recommend7 from "../images/אילנית המלצות 7.png";
import recommend8 from "../images/אילנית המלצות 8.png";
import recommend9 from "../images/אילנית המלצות 9.png";

import styles from "./RecommendsScreen.module.css";

const RecommendsScreen = () => {
  // Create array of testimonial images
  const testimonialImages = [
    { src: recommend1 },
    { src: recommend2 },
    { src: recommend3 },
    { src: recommend4 },
    { src: recommend5 },
    { src: recommend6 },
    { src: recommend7 },
    { src: recommend8 },
    { src: recommend9 },
 
  ];

  return (
    <>
      <div className={styles.recommendsContainer}>
        {/* אלמנט דקורטיבי */}
        <div className={styles.decorativeElement}></div>
        
        <div className={styles.rightSection}>
    
          <div className={styles.headerImageContainer}>
            <img 
              src={headerImage} 
              alt="תמונת כותרת" 
              className={styles.headerImage} 
            />
          </div>
        </div>
        
        <div className={styles.leftSection}>
          <Testimonials testimonialImages={testimonialImages} />
        </div>
      </div>
    </>
  );
};

export default RecommendsScreen;