import React, { useState } from 'react';
import styles from './FirstScreen.module.css';
import Loader from '../components/loader/Loader';

import ilanit from "../images/אילנית ראשית.png"

// ייבוא תמונות לקרוסלה
import tilboshot1 from "../images/חינת הזהב תלבושות 1.png"
import tilboshot2 from "../images/חינת הזהב תלבושות 2.png"
import tilboshot3 from "../images/חינת הזהב תלבושות 3.png"
import tilboshot4 from "../images/חינת הזהב תלבושות 4.png"
import tilboshot5 from "../images/חינת הזהב תלבושות 5.png"
import tilboshot6 from "../images/חינת הזהב תלבושות 6.png"
import tilboshot7 from "../images/חינת הזהב תלבושות 7.png"
import tilboshot8 from "../images/חינת הזהב תלבושות 8.png"
import tilboshot9 from "../images/חינת הזהב תלבושות 9.png"
import tilboshot10 from "../images/חינת הזהב תלבושות 10.png"
import tilboshot11 from "../images/חינת הזהב תלבושות 11.png"
import tilboshot12 from "../images/חינת הזהב תלבושות 12.png"
import tilboshot13 from "../images/חינת הזהב תלבושות 13.png"
import tilboshot14 from "../images/חינת הזהב תלבושות 14.png"
import tilboshot15 from "../images/חינת הזהב תלבושות 15.png"
import tilboshot16 from "../images/חינת הזהב תלבושות 16.png"
import tilboshot17 from "../images/חינת הזהב תלבושות 17.png"
import tilboshot18 from "../images/חינת הזהב תלבושות 18.png"

// ייבוא תמונות אירועים לגלריה
import event1 from "../images/אירועים 1.png"
import event2 from "../images/אירועים 2.png"
import event3 from "../images/אירועים 3.png"
import event4 from "../images/אירועים 4.png"
import event5 from "../images/אירועים 5.png"
import event6 from "../images/אירועים 6.png"
import event7 from "../images/אירועים 7.png"
import event8 from "../images/אירועים 8.png"
import event9 from "../images/אירועים 9.png"
import event10 from "../images/אירועים 10.png"
import event11 from "../images/אירועים 11.png"
import event12 from "../images/אירועים 12.png"
import event13 from "../images/אירועים 13.png"
import event14 from "../images/אירועים 14.png"
import event15 from "../images/אירועים 15.png"
import event16 from "../images/אירועים 16.png"
import event17 from "../images/אירועים 17.png"
import event18 from "../images/אירועים 18.png"
import event19 from "../images/אירועים 19.png"
import event20 from "../images/אירועים 20.png"
import Shorts from '../components/shorts/Shorts';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // פונקציה לפתיחת WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '972507277178';
    const message = 'היי חינת הזהב, אשמח לקבל עוד פרטים לגבי האירוע שלי';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // מערך תמונות לקרוסלה
  const carouselImages = [
    tilboshot1, tilboshot2, tilboshot3, tilboshot4, tilboshot5,
    tilboshot6, tilboshot7, tilboshot8, tilboshot9, tilboshot10,
    tilboshot11, tilboshot12, tilboshot13, tilboshot14, tilboshot15,
    tilboshot16, tilboshot17, tilboshot18
  ];

  // חלוקה לשתי קרוסלות
  const topCarouselImages = carouselImages.slice(0, 9);
  const bottomCarouselImages = carouselImages.slice(9, 18);

  // תמונות אירועים לגלריה
  const galleryImages = [
    event1, event2, event3, event4, event5,
    event6, event7, event8, event9, event10,
    event11, event12, event13, event14, event15, event16, event17, event18, event19, event20
  ];

  // אם התמונה עדיין לא נטענה, מציג את ה-Loader
  if (!imageLoaded) {
    return (
      <>
        <Loader />
        {/* תמונה נסתרת לטעינה */}
        <img 
          src={ilanit} 
          alt="אילנית ראשית" 
          style={{ display: 'none' }}
          onLoad={() => setImageLoaded(true)}
        />
      </>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.heroContainer}>
        {/* כותרת עליונה */}
        <div className={styles.headerSection}>
          <p className={styles.subtitle}>
            מתכננים לעשות חינה בקרוב?
          </p>
          <h1 className={styles.title}>
            תכירו את <span className={styles.goldText}>חינת הזהב</span>
          </h1>
          <p className={styles.description}>
            הפקת חינה מרוקאית מלאה במקום אחד - עם תלבושות מהודרות, עיצוב עשיר, אנרגיה סוחפת והנחיית טקס שתשאיר את כולם על הרגליים
          </p>

          {/* כפתור קריאה לפעולה */}
          <button className={styles.ctaButton} onClick={openWhatsApp}>
            אילנית, בואי נדבר על האירוע שלי
          </button>
        </div>

        {/* קרוסלה עליונה - נעה שמאלה */}
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTop}>
            {[...topCarouselImages, ...topCarouselImages, ...topCarouselImages].map((img, index) => (
              <div 
                key={index} 
                className={styles.carouselItem}
              >
                <img src={img} alt={`תלבושת ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* תמונה ראשית במרכז */}
        <div className={styles.mainImageContainer}>
          <img src={ilanit} alt="אילנית ראשית" className={styles.mainImage} />
        </div>

        {/* קרוסלה תחתונה - נעה ימינה */}
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselBottom}>
            {[...bottomCarouselImages, ...bottomCarouselImages, ...bottomCarouselImages].map((img, index) => (
              <div 
                key={index} 
                className={styles.carouselItem}
              >
                <img src={img} alt={`תלבושת ${index + 10}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== סקשן גלריית תמונות האירועים ========== */}
      <div className={styles.gallerySection}>
        <h2 className={styles.galleryTitle}>
          לפני הכל.. <span className={styles.goldText}>טעימה מהאירועים שלנו</span>
        </h2>
        <Shorts/>

        {/* כפתור קריאה לפעולה מתחת לגלריה */}
        <div className={styles.galleryCtaWrapper}>
          <button className={styles.ctaButton} onClick={openWhatsApp}>
            אילנית, בואי נדבר על האירוע שלי
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;