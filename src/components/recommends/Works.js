import React from 'react';
import styles from './Recommends.module.css';
import Button from '../button/Button';

// Import your images
import result1 from "../../images/אילנית המלצות 1.png";
import result2 from "../../images/אילנית המלצות 2.png";
import result3 from "../../images/אילנית המלצות 3.png";
import result4 from "../../images/אילנית המלצות 4.png";
import result5 from "../../images/אילנית המלצות 5.png";
import result6 from "../../images/אילנית המלצות 6.png";
import result7 from "../../images/אילנית המלצות 7.png";

import result9 from "../../images/אילנית המלצות 9.png";
import result10 from "../../images/אילנית המלצות 10.png";
import result11 from "../../images/אילנית המלצות 11.png";
import result12 from "../../images/אילנית המלצות 12.png";

const Works = () => {
  const images = [
   result1,result2,result3,result4,result5,result5, result6, result7, 
    result9, result10, result11, result12
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '972507277178';
    const message = 'היי חינת הזהב הגעתי מהדף שלכם, אשמח לשמוע עוד על..';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
   

   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
       <button className={styles.ctaButton} onClick={handleWhatsAppClick}>
          אילנית, אני רוצה לשריין תאריך
        </button>
    </>
  );
};

export default Works;