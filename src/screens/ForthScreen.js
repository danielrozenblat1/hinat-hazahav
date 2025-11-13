import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import styles from "./ForthScreen.module.css"
import image1 from "../images/אילנית מפורסמים 1.png"
import image2 from "../images/אילנית מפורסמים 2.png"
import image3 from "../images/אילנית מפורסמים 3.png"
import image4 from "../images/אילנית מפורסמים 4.png"
import image5 from "../images/אילנית מפורסמים 5.png"
import image6 from "../images/אילנית מפורסמים 6.png"
import image7 from "../images/אילנית מפורסמים 7.png"
import image8 from "../images/אילנית מפורסמים 8.png"
import image9 from "../images/אילנית מפורסמים 9.png"
import image10 from "../images/אילנית מפורסמים 10.png"
import image11 from "../images/אילנית מפורסמים 11.png"
import image12 from "../images/אילנית מפורסמים 12.png"

const ForthScreen = () => {
  const celebrities = [
    { id: 9, src: image9, alt: "מפורסם 9" },
    { id: 10, src: image10, alt: "מפורסם 10" },
    { id: 11, src: image11, alt: "מפורסם 11" },
    { id: 12, src: image12, alt: "מפורסם 12" },
    { id: 1, src: image1, alt: "מפורסם 1" },
    { id: 2, src: image2, alt: "מפורסם 2" },
    { id: 3, src: image3, alt: "מפורסם 3" },
    { id: 4, src: image4, alt: "מפורסם 4" },
    { id: 5, src: image5, alt: "מפורסם 5" },
    { id: 6, src: image6, alt: "מפורסם 6" },
    { id: 7, src: image7, alt: "מפורסם 7" },
    { id: 8, src: image8, alt: "מפורסם 8" },
  ];

  useEffect(() => {
    // אנימציה לכותרת
    ScrollReveal().reveal(`.${styles.title}`, {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: 'ease-out',
      reset: false
    });

    // אנימציה לתמונות - כל תמונה בנפרד עם דיליי שונה
    ScrollReveal().reveal(`.${styles.imageWrapper}`, {
      origin: 'bottom',
      distance: '80px',
      duration: 800,
      delay: 100,
      opacity: 0,
      scale: 0.85,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 150, // דיליי בין כל תמונה
      reset: false,
      mobile: true
    });

    // אנימציה לכפתור
    ScrollReveal().reveal(`.${styles.ctaButton}`, {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 600,
      opacity: 0,
      scale: 0.9,
      easing: 'ease-out',
      reset: false
    });

    // ניקוי
    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '972507277178';
    const message = 'היי חינת הזהב הגעתי מהדף שלכם, אשמח לשמוע עוד על..';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.background} id="מפורסמים">
      <div className={styles.headerSection}>
        <div className={styles.title}>
          חלק מהמפורסמים <span className={styles.goldText}>שהיו אצלנו</span>
        </div>
      </div>
      
      <div className={styles.galleryContainer}>
        <div className={styles.gallery}>
          {celebrities.map((celebrity) => (
            <div key={celebrity.id} className={styles.imageWrapper}>
              <img 
                src={celebrity.src} 
                alt={celebrity.alt}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
      
      <button className={styles.ctaButton} onClick={handleWhatsAppClick}>
        אילנית, בואי נדבר על האירוע שלי
      </button>
    </div>
  );
}

export default ForthScreen;